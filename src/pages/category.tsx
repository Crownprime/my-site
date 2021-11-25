import React from 'react'
import { GetStaticProps } from 'next'
import { getPublishSortedPostsData } from 'apis/posts'
import CategoryView from '@/features/category'
import DocHead from '@/components/doc-head'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const getStaticProps: GetStaticProps = async () => {
  const postsData = getPublishSortedPostsData()
  return {
    props: {
      postsData,
    },
  }
}

const CategoryPage: React.FC<{ postsData: Post[] }> = ({ postsData }) => {
  return (
    <div>
      <DocHead title="July's Site" />
      <Header />
      <CategoryView postsData={postsData} />
      <Footer />
    </div>
  )
}

export default CategoryPage
