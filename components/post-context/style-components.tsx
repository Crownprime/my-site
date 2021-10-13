import { FC } from 'react'
import cls from 'classnames'
import styles from './style.module.scss'

export const PostTextStyleComponent: FC<{
  postHtml: JSX.Element
  postToc: JSX.Element
}> = ({ postHtml, postToc }) => {
  return (
    <div className="post-text">
      <div className={cls('post-text-html', styles.postTextHtml)}>
        {postHtml}
      </div>
      <div className="post-text-toc">
        <div
          className={cls('post-text-toc-content', styles.postTextTocContent)}
        >
          {postToc}
        </div>
      </div>
      <style jsx>{`
        .post-text {
          position: relative;
          .post-text-toc {
            position: absolute;
            top: 0;
            right: 240px;
            .post-text-toc-content {
              position: fixed;
            }
          }
          .post-text-html {
            margin-right: 300px;
          }
        }
      `}</style>
    </div>
  )
}
