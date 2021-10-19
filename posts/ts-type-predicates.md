---
title: TypeScript 类型谓语
sub: 如何构造具有断言能力的函数
date: Tue Oct 12 2021 17:23:00 GMT+0800 (中国标准时间)
tag: Geek,TypeScript
---

ts 或许没有我们想象中的那么聪明。

# 背景

被一个问题困扰已久，看下面一段 ts 代码
```
const tags = []
if (flagA) {
  tags.push({ text: 'textA', color: 'colorA' })
}
```
这段代码很好理解，我们根据 flagA 真假来填充 tags 数组的内容。

但如果有很多条件判断呢？比如：

```
const tags = []
if (flagA) {
  tags.push({ text: 'textA', color: 'colorA' })
}
if (flagB) {
  tags.push({ text: 'textB', color: 'colorB' })
}
if (flagC) {
  tags.push({ text: 'textC', color: 'colorC' })
}
if (flagD) {
  tags.push({ text: 'textD', color: 'colorD' })
}
```

这段代码是不是看着头开始痛起来了，所以我们通常会这么写

```
// flagA?: boolean
type Tag = {
  text: string
  color: string
}
const tags = [
  flagA && { text: "textA", color: "colorA" },
  flagB && { text: "textB", color: "colorB" }
].filter(Boolean)
```

其实实质是利用 && 运算符懒惰特性，然后借助 `filter` 函数过滤掉无效值。

# 类型丢失

好了进入正题，问题来了上面这种写法得到的 `tags` 的类型是什么呢？从 js 逻辑层面考虑 `tags` 的类型应该为 `Tag[]`，可是遗憾的是 ts 并没有这样判断

![图片](/images/769397a9bebed0ff52be7b0da8502cc557c7bc2061e7377aefce4ecdbc82d797.png)

一开始我也是百思不解，理论上经过 `filter` 去掉 `false` 和 `undefined` 的情况，那不是只剩下 `Tag` 类型了么？为什么两种假值还存在类型中呢？`filter` 是 `Array` 原型上的函数，所以我们可以研究一下对应的类型文件

![图片](/images/2e96bc4cde032901251a5a2d80165f5470273c51900b2c139f521387060c0992.png)

可以看到接口 `Array` 存在范型 `T`，也就是说我们在 `new Array` 时就会确定 `T` 的类型，我们上述代码中的 `[...]` 其实也是 `new Array` 的一种语法糖

```
const tags = new Array([
  flagA && { text: "textA", color: "colorA" },
  flagB && { text: "textB", color: "colorB" }
]).filter(Boolean)
```

也就是说我们可以确定此时的 `T = false | undefined | Tag`

我们再找到 `filter` 函数的类型

![图片](/images/6e5bfc94f67896e31768b3d49e08d15cd4daa51913de86f44affc6d4e20ca641.png)

可以看到 `filter` 有两种形式，如果我们主动声明范型 S，那么最终输出结果就是 `S[]`，如果没有那么 `filter` 就只会返回最初实例化 `Array` 时记录的类型。换句话说 `filter` 返回的类型和传入的回调函数是什么没有半毛线关系，因为 `filter` 无法得知回调函数 predicate 内部到底过滤了啥、留下了啥、返回了啥。

**filter 不会根据 predicate 创造类型，filter 只是类型的搬运工！**

那么就没救了吗？不，我们要充分相信 ts 的设计，再回过头来看第一种声明，我们尝试在开头声明范型

![图片](/images/edc0e5d73aee8eebacfb52ae452b4c5be6066062faa70c35c792ed17fd623f43.png)

似乎返回类型正确了，但我们发现 `Boolean` 函数下出现了刺眼的红色波浪线，铺垫了这么多终于要讲到本文的关键点。

# 类型谓语 is

我们仔细观察一下 `filter` 的第一种声明中范型 `S` 不仅仅出现在 `<S extends T>` 中，似乎还出现在 predicate 中，`(value: T) => value is S`，这是个啥？从来没见过，查阅一下[官方文档](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)的 `is` 关键词，它对 `is` 的使用场景做了描述：

> We’ve worked with existing JavaScript constructs to handle narrowing so far, however sometimes you want more direct control over how types change throughout your code.
> To define a user-defined type guard, we simply need to define a function whose return type is a type predicate

看完说明和用例我就恍然大悟了，其实如果经常写库，`is` 是一个非常常见的关键词，我们可以看一下 `lodash` 的声明文件，比如比较常用的 `isNil`，我们可以认为这是一种断言函数

![图片](/images/129748804444323eded5b86f5509c8ebccf16141d43361535f802f8a393384a8.png)

回过头来，我们再思考一下在 filter 中如果我们使用了范型 S，就必须有对应的断言函数呢？其实这就是 ts 的严谨性，我们可以发现范型 S，并不能随便指定它存在两个约束条件：

- S 必须继承自 T
- S 必须是 predicate 断言函数为真时的断言类型

仔细想一想如果失去了其中一种约束，这时是不是就等于

```
// filter<S>(): S[]
const tags = [...].filter<any>(callback)
```

然后我们再换一种写法

```
const tags = [...].filter(callback) as any[]
```

那么 ts 类型约束就会形同虚设。

值得深思的是，ts 被称为 js 的超集。而事实上 ts 仅仅存活在 ts server 或者 tsc 编译时中，所谓的类型约束。当类型与 js 逻辑产生耦合的时候就可能需要使用强制声明来弥补 ts 的不足。
