import { useMemo } from 'react'
import Link from 'next/link'
import Container from '@/components/layout/container'
import { Tags } from '@/components/tag'
import { getYearByTimestamp, getMonthAndDayByTimestamp } from '@/lib'
import { TimeLineStyled } from './styled'

const PostTimePoint: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="post">
      <div className="echo-content">
        <div className="title truncate">
          <span className="text-lg cursor-pointer">
            <Link href={'/post/' + post.id}>{post.title}</Link>
          </span>
        </div>
        <span className="date text-base text-$T1">
          {getMonthAndDayByTimestamp(post.date)}
        </span>
      </div>
      <div className="hide-content pl-sm pt-sm">
        {Boolean(post.sub) && (
          <div className="sub-title text-$T1 text-base mb-mn">
            「{post.sub}」
          </div>
        )}
        <div className="text-$T1 text-base">{post.introduction}</div>
        {Boolean(post.tags?.length) && (
          <div>
            <Tags tags={post.tags} />
          </div>
        )}
      </div>
    </div>
  )
}

const YearTimePoint: React.FC<{
  year: string
  data: Post[]
}> = ({ year, data }) => {
  return (
    <TimeLineStyled>
      <div className="year">
        <span className="text-xl font-medium">{year}</span>
      </div>
      <div className="posts">
        {data.map(p => (
          <PostTimePoint post={p} key={p.id} />
        ))}
      </div>
    </TimeLineStyled>
  )
}

const PostTimeLine: React.FC<{
  posts: Post[]
}> = ({ posts }) => {
  const postGroupByYear = useMemo(() => {
    const years: string[] = []
    const map: Record<string, Post[]> = {}
    posts.forEach(p => {
      const year = getYearByTimestamp(p.date)
      if (map[year]) {
        map[year].push(p)
      } else {
        years.push(year)
        map[year] = [p]
      }
    })
    return { years, map }
  }, [posts])
  return (
    <Container>
      {postGroupByYear.years.map(y => (
        <YearTimePoint year={y} data={postGroupByYear.map[y] || []} key={y} />
      ))}
    </Container>
  )
}

export default PostTimeLine
