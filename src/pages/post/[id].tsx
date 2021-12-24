import { useEffect } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { head } from 'lodash-es'
import Prism from 'prismjs'
import DocHead from '@/components/doc-head'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PostView from '@/features/post'
import { fetchPostIds, fetchPostById } from 'apis'

import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-tsx'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchPostIds().map(id => ({ params: { id } }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = Array.isArray(params.id) ? head(params.id) : params.id
  const postData = fetchPostById(id)
  return {
    props: {
      postData,
    },
  }
}

const PostPage: React.FC<{ postData: Post }> = ({ postData }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <div>
      <DocHead title={postData.title} />
      <Header />
      <PostView data={postData} />
      <Footer />
    </div>
  )
}

export default PostPage
