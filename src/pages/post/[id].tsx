import { FC } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { head } from 'lodash-es'
import DocHead from '@/components/doc-head'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PostView from '@/features/post'
import { getPostData, getPostsDataIds, PostData } from 'apis/posts'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPostsDataIds().map(id => ({ params: { id } }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = Array.isArray(params.id) ? head(params.id) : params.id
  const postData = getPostData(id)
  return {
    props: {
      postData,
    },
  }
}

const PostPage: FC<{ postData: PostData }> = ({ postData }) => {
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
