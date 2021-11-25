declare type PostMeta = {
  title: string
  sub: string
  date: string
  status: string
  tags: string
}

declare type Post = PostMeta & { id: string }

declare type PostData = PostMeta & {
  id: string
  // md 原始字符串
  content: string
}
