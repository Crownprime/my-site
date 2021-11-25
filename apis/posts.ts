import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { crateTOCTree, TOCNode } from 'utils'

const postsDirectory = path.join(process.cwd(), 'posts')

/******************************************************************
 * 获取 post 列表，并且按照 date 排序
 */
export function getPostsData(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const postsData = fileNames
    .map(fileName => {
      const id = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)
      return {
        id,
        ...(matterResult.data as PostMeta),
      }
    })
    .filter(post => post.status !== 'draft')
  // 按时间排序
  return postsData.sort((a, b) =>
    new Date(a.date) < new Date(b.date) ? 1 : -1,
  )
}

// 获取已发布列表且按照 date 排序
export function getPublishSortedPostsData() {
  return getPostsData()
    .filter(post => post.status !== 'draft')
    .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
}

// 获取全量 post id
export function getPostsDataIds() {
  return getPostsData().map(p => p.id)
}

/***********************************************************************
 * 获取 post 全部信息
 */
export type { TOCNode }
export type PostData = PostMeta & {
  id: string
  // md 原始字符串
  content: string
  // 树状目录
  toc: TOCNode[]
}
export function getPostData(id: string): PostData {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const { children: tree } = remark().use(html).parse(matterResult.content)
  const headingList = tree.filter(node => node.type === 'heading')
  const toc = crateTOCTree(headingList as any, 2)
  return {
    id,
    toc,
    content: matterResult.content,
    ...(matterResult.data as PostMeta),
  }
}
