import { FC } from 'react'
import { head } from 'lodash-es'
import ReactMarkdown from 'react-markdown'
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
import PostImage from '@/components/post-image'
import { PostData, TOCNode } from 'apis/posts'
import { PostTextStyleComponent } from './style-components'

configureAnchors({ offset: -65 })

const PostHtml: FC<{ data: PostData }> = ({ data }) => {
  return (
    <ReactMarkdown
      components={{
        img({ src, alt }) {
          return (
            <div className="w-full h-[200px] my-lg">
              <PostImage src={src} alt={alt} />
            </div>
          )
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

const PostToc: FC<{ toc: PostData['toc'] }> = ({ toc }) => {
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

const PostText: FC<{ data: PostData }> = ({ data }) => {
  return (
    <PostTextStyleComponent
      postHtml={<PostHtml data={data} />}
      postToc={<PostToc toc={data.toc} />}
    />
  )
}

export default PostText
