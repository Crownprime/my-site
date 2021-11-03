import { FC } from 'react'
import { echoTime } from '@/lib'
import { PostData } from 'apis/posts'
import { PostHeadStyled } from './styled'

const PostHead: FC<{ data: PostData }> = ({ data }) => {
  return (
    <PostHeadStyled
      title={data.title}
      sub={data.sub}
      date={echoTime(data.date)}
      tags={data.tags}
    />
  )
}

export default PostHead
