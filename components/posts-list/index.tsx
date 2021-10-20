import React from 'react'
import Link from 'next/link'
import { echoTime } from 'lib'
import { PostsData } from 'apis/posts'
import { PostSListItemWrap } from './styleComponents'

const PostsList: React.FC<{
  data: PostsData
}> = ({ data }) => {
  return (
    <div>
      {data.map(({ title, sub, date, tags, id }) => (
        <PostSListItemWrap key={id} sub={sub} date={echoTime(date)} tags={tags}>
          <Link href={'/post/' + id}>{title}</Link>
        </PostSListItemWrap>
      ))}
    </div>
  )
}

export default PostsList
