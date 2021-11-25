import { useRouter } from 'next/router'
import { ExpandMoreIcon } from '@/components/icons'
import WriteText from '@/components/write-text'
import { useViewport } from '@/hooks'
import styles from './styles.module.scss'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

const Cover = () => {
  const router = useRouter()
  const { vh } = useViewport()
  const { scrollY } = useViewportScroll()
  const opacity = useTransform(scrollY, [0, vh], [1, 0])
  const handleClick = () => {
    router.push('/category')
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
