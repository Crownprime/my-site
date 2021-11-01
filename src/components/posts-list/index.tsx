import React from 'react'
import Link from 'next/link'
import { echoTime } from '@/lib'
import { PostsData } from 'apis/posts'
import { PostListStyled, PostItemStyled } from './styled'

const PostsList: React.FC<{
  data: PostsData
}> = ({ data }) => {
  return (
    <PostListStyled>
      {data.map(({ title, sub, date, tags, id }) => (
        <PostItemStyled key={id} sub={sub} date={echoTime(date)} tags={tags}>
          <Link href={'/post/' + id}>{title}</Link>
        </PostItemStyled>
      ))}
    </PostListStyled>
  )
}

export default PostsList
