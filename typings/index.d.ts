declare type PostMeta = {
  title: string
  sub?: string
  date: string
  status: string
  tags: string[] | null
}

declare type Post = PostMeta & {
  id: string
  content: string
  toc: TOCNode[]
  introduction: string
}

declare type PostData = PostMeta & {
  id: string
  // md 原始字符串
  content: string
}

declare type TOCNode = {
  depth: number
  text: string
  children: TOCNode[]
}
