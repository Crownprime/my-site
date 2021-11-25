import { useMemo } from 'react'
import Link from 'next/link'
import Container from '@/components/layout/container'
import { getYearByTimestamp, getMonthAndDayByTimestamp } from '@/lib'
import { TimeLineStyled } from './styled'

const PostTimePoint: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="post">
      <div className="text-base text-$T1">
        {getMonthAndDayByTimestamp(post.date)}
      </div>
      <div>
        <span className="text-xl cursor-pointer">
          <Link href={'/post/' + post.id}>{post.title}</Link>
        </span>
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
  data: Post[]
}> = ({ data }) => {
  const postGroupByYear = useMemo(() => {
    const years: string[] = []
    const map: Record<string, Post[]> = {}
    data.forEach(p => {
      const year = getYearByTimestamp(p.date)
      if (map[year]) {
        map[year].push(p)
      } else {
        years.push(year)
        map[year] = [p]
      }
    })
    return { years, map }
  }, [data])
  return (
    <Container>
      {postGroupByYear.years.map(y => (
        <YearTimePoint year={y} data={postGroupByYear.map[y] || []} key={y} />
      ))}
    </Container>
  )
}

export default PostTimeLine
