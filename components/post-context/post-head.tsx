import { FC } from 'react'
import { ClockIcon } from '@heroicons/react/outline'
import { PostData } from '../../apis/posts'

const PostHead: FC<{ data: PostData }> = ({ data }) => {
  return (
    <div>
      <div className="text-5xl text-N-900">{data.title}</div>
      <div className="text-base text-N-500 flex items-center mt-[4px]">
        <ClockIcon className="w-md h-md" />
        <span className="pl-sm">{data.date}</span>
      </div>
    </div>
  )
}

export default PostHead
