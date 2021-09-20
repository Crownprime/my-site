import React from 'react'
import DocHead from '../components/doc-head'
import PostsList from '../components/posts-list'
import { getSortedPostsData } from '../lib/posts'

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
        <div className="container mx-auto">
          <PostsList dataSource={allPostsData} />
        </div>
      </main>
    </div>
  )
}
