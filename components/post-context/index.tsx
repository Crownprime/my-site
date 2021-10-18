import { FC } from 'react'
import Container from '../layout/container'
import { PostData } from 'apis/posts'
import PostText from './post-text'

const PostContext: FC<{ data: PostData }> = ({ data }) => {
  return (
    <Container>
      <PostText data={data} />
    </Container>
  )
}

export { default as PostHead } from './post-head'
export default PostContext
