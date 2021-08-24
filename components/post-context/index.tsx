import { PostContentHtml } from './style'

const PostContext = ({ dataSource }) => {
  return (
    <div className="container mx-auto">
      <div className="text-lg">{dataSource.title}</div>
      <div className="text-base">{dataSource.date}</div>
      <br />
      <PostContentHtml>
        <div dangerouslySetInnerHTML={{ __html: dataSource.contentHtml }}></div>
      </PostContentHtml>
    </div>
  )
}

export default PostContext
