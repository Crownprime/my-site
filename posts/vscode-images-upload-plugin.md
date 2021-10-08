---
title: VSCode 图片上传插件的轮子
date: Fri Oct 08 2021 16:37:16 GMT+0800 (中国标准时间)
status: published
tags: Geek
---
之前一直在用托管的 CMS 系统做内容来源，这会儿用上了 next.js 之后已经不想用复杂的 CMS 和复杂的 api 了。纠结了好几天决定还是用 markdown 作为内容载体吧（虽然 wordpress5 的古腾堡编辑器真的很好用，嘤嘤嘤），就算以后再做迁移内容也不会丢失，这块有空我再开个文整理一下。现在失去 CMS 之后最迫切的就是需要一个图床。

整理了一下思路，图床本身并不是什么难的问题，重要的还是要能“方便的”写文章，而不是大部分时间都在思考如何命名图片名称以及在网页上批量上传图片，所以这个流程应该具备以下几个功能：

* 能够自动上传到 SSO

* 能够在本地备份

* 能够处理图片的名称（强迫症接受不了 01.png、未命名.png 这种乱七八糟的名称）

* 能够合理的插入到 markdown 中

要符合上述要求，一个 vscode extension 呼之欲出。于是乎我翻了一圈扩展商店并没有特别合适功能的扩展（要么就是要做一些反人类的设定），还是自己手撸一个吧！

# 搭个架子

vscode 本身是用 Electron 开发的，所以随便来点 node 代码就能作为一个插件使用，只是需要注意 vscode 本身约定的格式。(微软官方有专门的脚手架)[https://github.com/Microsoft/vscode-generator-code]，非常好用，不过对于我来说有点问题，这个之后会讲到，所以这里放弃使用它，改为裸建了一个纯净的项目。

(VSCode 插件开发全攻略)[https://www.cnblogs.com/liuxianan/p/vscode-plugin-overview.html] 这个作者写的很详细，之前 chrome 插件开发也是看的这个作者的入门教程，很赞。

## package.json

我这边不多展开讲如何开发 vscode 插件，还是以实现功能为主，首先我们需要一个 package.json，对比我们常接触的会多一些额外的字段：

```
// package.json
{
  // 插件名称
  "name": "image-uploader-plugin",
  // 发布到插件商店之后的名称
  "displayName": "图片上传工具",
  // 简介
  "description": "image uploader plugin for VSCode",
  // 一些关键词
  "keywords": [],
  // 作者
  "publisher": "July",
  // 入口文件
  "main": "./dist/extension.js",
}
```

其中最重要的当然是 `main` 字段啦，这个字段是告诉 vscode 从哪里开始读取插件代码，可以发现我定义的入口有关键词 `dist`。上面说明其实一段 js 代码就可以作为插件，而很明显简单我是没有 ts 就会死，所以会用 tsc 简单编译一波。官方的脚手架默认使用 webpack 作为打包工具兼顾热更新调试很方便，不过离谱的是我打算用的七牛云的官方 SDK 没法在 webpack5 里面给我乖乖的跑，所以不得不放弃。所幸我们要做的东西功能并不复杂，tsc 足够了。

## 总体结构

一波操作之后，总体结构如下：

```
|- .vscode
  |- launch.json      # 运行脚本
|- assets             # 静态资源
|- dist
  |- extension.js     # 插件入口文件
|- src
  |- extension.ts     # 源码入口
|- package.json
|- tsconfig.json
```

需要对 `tsconfig.json` 填充一点编译选项（每次配这个最头痛）

```
// tsconfig.json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "ES2020",
    "lib": [
      "ES2020"
    ],
    "rootDir": "src",
    "outDir": "dist",
    "strict": true
  }
}
```

做为编译配置，我们可以为 package.json 加上 script

```
// package.json
"scripts": {
  "vscode:prepublish": "npm run compile",
  "compile": "tsc -p ./",
  "watch": "tsc -watch -p ./"
},
```

vscode 右侧有个“运行与调试”功能，按 F5 就能出发运行，我们在开发插件时一般会用他作为快捷调试按键，为此我们需要在 .vscode 文件夹下新建文件 `launch.json`

```
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Extension",
      "type": "extensionHost",
      "request": "launch",
      "runtimeExecutable": "${execPath}",
      "args": [
        "--extensionDevelopmentPath=${workspaceFolder}"
      ],
    },
  ]
}
```

结合 `tsc -watch` 理论上可以做到比较好的“热更新”操作，不过实际操作的时候遇到了点问题，所以这里先不多说，之后有时间会做更新。

# 核心原理

按照设想，首先我们本地有张截图需要需要被插入到 markdown 中，因此我们会先在 Finder/资源管理器中先 ctrl + c 复制这个图片，我们假定它叫 `/Users/July/Download/img1.png`。

然后按照操作习惯我们切回 vscode 正在编写的 markdown 中按下 `ctrl + v`，此时我们需要读取剪切板中的图片内容，将其上传到 SSO，并且备份在本地指定路径，并且得到一个新的 cdn 地址，如 `http://images.cdn.cn/images/hashname.png`，然后将其格式化为 markdown 语法 `![](http://images.cdn.cn/images/hashname.png)`，插入到编辑器光标处。

这一切对于使用者来说是无感知的，似乎就是将一张图片“copy”到了 markdown 中。

## 触发时机

现在需要契合 vscode 的机制，我们可以创建一个新的快捷键来代替 `ctrl + v`，仅在需要拷贝图片的使用它，在这之前我们需要先创立一个新的命令，然后将我们设想的快捷键去关联这个新命令，这一切都在 package.json 中完成：

```
// package.json
{
  "contributes": {
    "commands": [{
      "command": "image-uploader.paste",
      "title": "Paste Image"
    }],
    "keybindings":[{
      "command": "image-uploader.paste",
      "key": "alt+shift+v",
      "mac": "alt+shift+v",
      "when": "editorLangId == markdown"
    }],
    "menus": {
      "editor/context": [
        {
          "command": "image-uploader.paste",
          "when": "editorLangId == markdown"
        }
      ]
    }
  }
}
```

可以看到除了快捷键，我还在右键菜单增加了一个选项，满足各种习惯的使用者。为了排除干扰，快捷键和右键菜单仅会在 vscode 活跃的窗口为 markdown 文件时才会生效。

# 核心代码

为了方便后续增加功能，我们可以把我们已经设计好的“拷贝”功能写的更聚合一点，因此我们在源码文件夹里增加两个文件。

```
|- src
  |- features       # 新增，承载核心功能
    |- paste.ts
  |- lib            # 新增，工具类
    |- utils.ts
  |- extension.ts
```

因此，我们在 extension.ts 中，只需要在每次调用命令时初始化 paste.ts 的实例，不关心他的功能，看起来代码可以清晰一点。

```
// src/extension.ts
import PasteAction from './features/paste'

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('image-uploader.paste', async () => {
    new PasteAction()
  })
  context.subscriptions.push(disposable)
}
```

## 剪切板内容

## 配置常量

## 上传七牛云
