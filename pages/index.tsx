import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  console.log(allPostsData)
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {allPostsData.map(({ id, date, title }) => 
          <li key={id}>
            {title} <br />{id} <br />{date}
          </li>
        )}
      </main>
    </div>
  )
}
