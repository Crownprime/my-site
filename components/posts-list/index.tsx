import React from 'react'
import Link from 'next/link'

const PostsList: React.FC<{
  dataSource: any
}> = ({ dataSource }) => {
  return (
    <div>
      {dataSource.map(({ title, sub, date, id }) => (
        <div className="w-full mb-lg" key={id}>
          <div className="text-3xl text-N-900">
            <Link href={'/post/' + id}>
              <span className="cursor-pointer">{title}</span>
            </Link>
          </div>
          <div className="text-base text-N-500">{sub}</div>
          <div className="text-sm text-N-500">{date}</div>
        </div>
      ))}
    </div>
  )
}

export default PostsList
