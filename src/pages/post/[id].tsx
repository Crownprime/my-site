import { FC } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { head } from 'lodash-es'
import DocHead from '@/components/doc-head'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PostView from '@/features/post'
import { fetchPostIds, fetchPostById } from 'apis'

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

const PostPage: FC<{ postData: Post }> = ({ postData }) => {
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
