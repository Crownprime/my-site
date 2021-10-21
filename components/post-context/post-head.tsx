import { FC } from 'react'
import { AlarmIcon, StyleIcon } from 'components/icons'
import { PostData } from 'apis/posts'
import { PostHeadWrap } from './style-components'

const PostHead: FC<{ data: PostData }> = ({ data }) => {
  return (
    <PostHeadWrap>
      <div className="text-5xl text-N-900">{data.title}</div>
      <div className="text-base text-N-500 flex items-center mt-[4px]">
        <AlarmIcon />
        <span className="pl-sm">{data.date}</span>
      </div>
    </PostHeadWrap>
  )
}

export default PostHead
