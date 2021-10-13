import { FC } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { head } from 'lodash-es'
import PostContext from '../../components/post-context'
import { getAllPostIds } from '../../lib/posts'
import { getPostData, PostData } from '../../apis/posts'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = Array.isArray(params.id) ? head(params.id) : params.id
  const postData = await getPostData(id)
  return {
    props: {
      postData,
    },
  }
}

const PostPage: FC<{ postData: PostData }> = ({ postData }) => {
  return <PostContext data={postData} />
}

export default PostPage
