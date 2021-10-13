import React from 'react'
import Link from 'next/link'
import { ClockIcon } from '@heroicons/react/outline'

const PostsList: React.FC<{
  dataSource: any
}> = ({ dataSource }) => {
  return (
    <div>
      {dataSource.map(({ title, sub, date, id }) => (
        <div className="w-full mb-xl" key={id}>
          <div className="text-base text-N-500 flex items-center mb-[4px]">
            <ClockIcon className="h-md w-md" />
            <span className="pl-sm">{date}</span>
          </div>
          <div className="text-3xl text-N-900">
            <Link href={'/post/' + id}>
              <span className="cursor-pointer">{title}</span>
            </Link>
          </div>
          <div className="text-base text-N-500 mt-sm">{sub}</div>
        </div>
      ))}
    </div>
  )
}

export default PostsList
