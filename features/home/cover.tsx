import { animateScroll as scroll } from 'react-scroll'
import { ExpandMoreIcon } from 'components/icons'
import WriteText from 'components/write-text'
import { useViewport } from 'hooks'
import styles from './styles.module.scss'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

const Cover = () => {
  const { vh } = useViewport()
  console.log(vh)
  const { scrollY } = useViewportScroll()
  const opacity = useTransform(scrollY, [0, vh], [1, 0])
  const handleClick = () => {
    scroll.scrollTo(vh - 60)
  }
  return (
    <div className={styles.homeCover}>
      <WriteText />
      <div className={styles.homeCoverExpand}>
        <motion.div style={{ opacity }}>
          <div className="expand-animate" onClick={handleClick}>
            <ExpandMoreIcon />
          </div>
        </motion.div>
      </div>
      <style jsx>{`
        .expand-animate {
          animation-name: shakeY;
          animation-iteration-count: infinite;
          animation-duration: 2s;
          cursor: pointer;
        }
        @keyframes shakeY {
          from,
          to {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  )
}

export default Cover
