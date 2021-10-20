import { FC } from 'react'
import PostsList from 'components/posts-list'
import Cover from './cover'
import { PostsData } from 'apis/posts'

const Home: FC<{ postsData: PostsData }> = ({ postsData }) => {
  return (
    <main>
      <Cover />
      <div className="container">
        <PostsList data={postsData} />
      </div>
    </main>
  )
}

export default Home
