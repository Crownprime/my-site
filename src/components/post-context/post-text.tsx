import { FC } from 'react'
import { head } from 'lodash-es'
import ReactMarkdown from 'react-markdown'
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
import PostImage from '@/components/post-image'
import { PostTextStyled } from './styled'

configureAnchors({ offset: -65 })

const PostHtml: FC<{ data: Post }> = ({ data }) => {
  return (
    <ReactMarkdown
      components={{
        img({ src, alt }) {
          return <PostImage src={src} alt={alt} />
        },
        h1({ children }) {
          return (
            <ScrollableAnchor id={head(children as string[])}>
              <h1>{head(children)}</h1>
            </ScrollableAnchor>
          )
        },
        h2({ children }) {
          return (
            <ScrollableAnchor id={head(children as string[])}>
              <h2>{head(children)}</h2>
            </ScrollableAnchor>
          )
        },
      }}
    >
      {data.content}
    </ReactMarkdown>
  )
}

const PostToc: FC<{ toc: Post['toc'] }> = ({ toc }) => {
  const createTree = (node: TOCNode) => {
    return (
      <li key={node.text}>
        <a href={'#' + node.text}>{node.text}</a>
        {Boolean(node.children.length) && (
          <ul>{node.children.map(n => createTree(n))}</ul>
        )}
      </li>
    )
  }
  return <ul>{toc.map(t => createTree(t))}</ul>
}

const PostText: FC<{ data: Post }> = ({ data }) => {
  return (
    <PostTextStyled
      html={<PostHtml data={data} />}
      toc={<PostToc toc={data.toc} />}
    />
  )
}

export default PostText
