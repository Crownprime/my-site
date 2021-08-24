import React from 'react'
import Link from 'next/link'

const PostsList: React.FC<{
  dataSource: any
}> = ({ dataSource }) => {
  return (
    <div>
      {dataSource.map(({ title, date, id }) => (
        <Link href={'/post/' + id} key={id}>
          <div className="w-full mb-md cursor-pointer">
            <div className="text-lg">{title}</div>
            <div className="text-base">{date}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PostsList
