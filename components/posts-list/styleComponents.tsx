import { FC } from 'react'
import { AlarmIcon, StyleIcon } from 'components/icons'
import styles from './styles.module.scss'

export const PostSListItemWrap: FC<{
  date: string
  sub?: string
  tags?: string
}> = ({ sub, date, tags, children }) => {
  return (
    <div className={styles.postsListItem}>
      <div className={styles.postsListItemTitle}>{children}</div>
      {Boolean(sub) && <div className={styles.postsListItemSub}>{sub}</div>}
      <div className={styles.postsListItemDate}>
        <AlarmIcon />
        <span>{date}</span>
      </div>
      {Boolean(tags) && (
        <div className={styles.postsListItemTags}>
          <StyleIcon />
          <span>{tags}</span>
        </div>
      )}
    </div>
  )
}
