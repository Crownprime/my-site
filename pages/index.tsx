import React from 'react'
import Head from 'next/head'
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
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container mx-auto">
          <PostsList dataSource={allPostsData} />
        </div>
      </main>
    </div>
  )
}
