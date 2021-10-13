import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { crateTOCTree, TOCNode } from '../lib/utils'

const postsDirectory = path.join(process.cwd(), 'posts')

export type { TOCNode }
export type PostMeta = {
  title: string
  date: string
  status: string
  tags: string
}
export type PostData = PostMeta & {
  id: string
  content: string
  toc: TOCNode[]
}
export async function getPostData(id: string): Promise<PostData> {
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
