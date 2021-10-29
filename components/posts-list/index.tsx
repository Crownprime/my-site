import React from 'react'
import Link from 'next/link'
import { echoTime } from 'lib'
import { PostsData } from 'apis/posts'
import { PostSListItemWrap } from './styleComponents'
import Container from 'components/layout/container'

const PostsList: React.FC<{
  data: PostsData
}> = ({ data }) => {
  return (
    <Container>
      <div style={{ background: '#fff', borderRadius: '4px' }}>
        {data.map(({ title, sub, date, tags, id }) => (
          <PostSListItemWrap
            key={id}
            sub={sub}
            date={echoTime(date)}
            tags={tags}
          >
            <Link href={'/post/' + id}>{title}</Link>
          </PostSListItemWrap>
        ))}
      </div>
    </Container>
  )
}

export default PostsList
