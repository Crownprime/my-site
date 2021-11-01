import { FC } from 'react'
import PostContent, { PostHead } from '@/components/post-context'
import { PostData } from 'apis/posts'

const PostView: FC<{ data: PostData }> = ({ data }) => {
  return (
    <main>
      <PostHead data={data} />
      <PostContent data={data} />
    </main>
  )
}

export default PostView
