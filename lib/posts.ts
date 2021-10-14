import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

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
