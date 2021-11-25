import React from 'react'
import PostTimeLine from '@/components/post-time-line'

const Category: React.FC<{ postsData: Post[] }> = ({ postsData }) => {
  return (
    <div className="pt-[80px] min-h-[100vh]">
      <PostTimeLine data={postsData} />
    </div>
  )
}

export default Category
