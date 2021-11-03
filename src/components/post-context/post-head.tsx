import { FC } from 'react'
import { echoTime } from '@/lib'
import { AlarmIcon, StyleIcon } from '@/components/icons'
import { PostData } from 'apis/posts'
import { PostHeadWrap } from './style-components'
import { PostHeadStyled } from './styled'

const PostHead: FC<{ data: PostData }> = ({ data }) => {
  return (
    <PostHeadStyled
      title={data.title}
      sub={data.sub}
      date={echoTime(data.date)}
      tags={data.tags}
    />
    // <PostHeadWrap>
    //   <div className="text-5xl text-N-900 pt-[30px] pb-[24px]">
    //     {data.title}
    //   </div>
    //   <div className="text-base text-N-500 flex items-center mt-[4px]">
    //     <AlarmIcon />
    //     <span className="pl-sm">{echoTime(data.date)}</span>
    //   </div>
    // </PostHeadWrap>
  )
}

export default PostHead
