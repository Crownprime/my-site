import React from 'react'
import Link from 'next/link'

const PostsList: React.FC<{
  dataSource: any
}> = ({ dataSource }) => {
  return (
    <div>
      {dataSource.map(({ title, date, id }) => (
        <Link href={'/post/' + id} key={id}>
          <div>
            <div>{title}</div>
            <div>{date}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PostsList
