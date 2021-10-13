import { FC } from 'react'
import Container from '../layout/container'
import { PostData } from '../../apis/posts'
import PostHead from './post-head'
import PostText from './post-text'

const PostContext: FC<{ data: PostData }> = ({ data }) => {
  return (
    <Container>
      <PostHead data={data} />
      <PostText data={data} />
    </Container>
  )
}

export default PostContext
