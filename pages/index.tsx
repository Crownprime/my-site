import React from 'react'
import DocHead from '../components/doc-head'
import PostsList from '../components/posts-list'
import { getSortedPostsData } from '../lib/posts'
import WriteText from '../components/write-text'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <div>
      <DocHead title="July's Site" />

      <main>
        <div className="h-[180px] pt-[60px] text-center flex justify-center">
          <WriteText />
        </div>
        <div className="container">
          <PostsList dataSource={allPostsData} />
        </div>
      </main>
    </div>
  )
}
