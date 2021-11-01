import React from 'react'
import { GetStaticProps } from 'next'
import DocHead from '@/components/doc-head'
import Header from '@/components/header'
import Footer from '@/components/footer'
import HomeView from '@/features/home'
import { getPublishSortedPostsData, PostsData } from 'apis/posts'

export const getStaticProps: GetStaticProps = async () => {
  const postsData = getPublishSortedPostsData()
  return {
    props: {
      postsData,
    },
  }
}

const Home: React.FC<{ postsData: PostsData }> = ({ postsData }) => {
  return (
    <div>
      <DocHead title="July's Site" />
      <Header />
      <HomeView postsData={postsData} />
      <Footer />
    </div>
  )
}

export default Home
