import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkToc from 'remark-toc'

export type IPost = {
  title: string
  date: string
  status: string
}

const postsDirectory = path.join(process.cwd(), 'posts')

type IGetSortedPostsData = () => (IPost & { id: string })[]
export const getSortedPostsData: IGetSortedPostsData = () => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData: (IPost & { id: string })[] = fileNames
    .map(fileName => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '')

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      return {
        id,
        ...(matterResult.data as IPost),
      }
    })
    .filter(post => post.status !== 'draft')
  // 按时间排序
  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1
    } else {
      return -1
    }
  })
}

export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  const { children: tree } = await remark()
    .use(html)
    .parse(matterResult.content)
  const headingList = tree.filter(node => node.type === 'heading')
  const toc = []
  const s = []
  for (let i = 0; i < headingList.length; i++) {
    const node = {
      depth: (headingList[i] as any).depth,
      text: (headingList[i] as any).children,
      children: [],
    }
    while (true) {
      if (!s.length) {
        s.push(node)
        toc.push(node)
        break
      }
      const p = s[s.length - 1]
      if (p.depth < node.depth) {
        p.children.push(node)
        s.push(node)
        break
      }
      if (p.depth === node.depth || p.depth > node.depth) {
        s.pop()
        continue
      }
    }
  }
  console.log(JSON.stringify(toc))
  // Combine the data with the id
  return {
    id,
    content: matterResult.content,
    ...matterResult.data,
  }
}
