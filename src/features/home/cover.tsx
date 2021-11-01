import { animateScroll as scroll } from 'react-scroll'
import { ExpandMoreIcon } from '@/components/icons'
import WriteText from '@/components/write-text'
import { useViewport } from '@/hooks'
import styles from './styles.module.scss'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

const Cover = () => {
  const { vh } = useViewport()
  const { scrollY } = useViewportScroll()
  const opacity = useTransform(scrollY, [0, vh], [1, 0])
  const handleClick = () => {
    scroll.scrollTo(vh - 60)
  }
  return (
    <div className={styles.homeCover}>
      <WriteText />
      <div className={styles.homeCoverExpand}>
        <motion.div
          className="cursor-pointer"
          style={{ opacity }}
          animate={{ y: 10 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          }}
          onClick={handleClick}
        >
          <ExpandMoreIcon />
        </motion.div>
      </div>
    </div>
  )
}

export default Cover
