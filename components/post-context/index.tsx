import { PostContentHtml } from './style'
import { ClockCircleOutlined } from '@ant-design/icons'

const PostContext = ({ dataSource }) => {
  return (
    <div className="container mx-auto">
      <div className="text-5xl text-N-900">{dataSource.title}</div>
      <div className="text-base text-N-500 flex items-center mt-[4px]">
        <ClockCircleOutlined />
        <span className="pl-sm">{dataSource.date}</span>
      </div>
      <br />
      <PostContentHtml>
        <div dangerouslySetInnerHTML={{ __html: dataSource.contentHtml }}></div>
      </PostContentHtml>
    </div>
  )
}

export default PostContext
