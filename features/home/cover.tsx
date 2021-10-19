import { animateScroll as scroll } from 'react-scroll'
import { ExpandMoreIcon } from 'components/icons'
import WriteText from 'components/write-text'
import { useScrollY } from 'hooks'
import styles from './styles.module.scss'

const Cover = () => {
  const y = useScrollY()
  const handleClick = () => {
    const windowH =
      document.documentElement.clientHeight || document.body.clientHeight
    scroll.scrollTo(windowH)
  }
  return (
    <div className={styles.homeCover}>
      <WriteText />
      {Boolean(y < 100) && (
        <div className={styles.homeCoverExpand}>
          <div className="expand-animate" onClick={handleClick}>
            <ExpandMoreIcon />
          </div>
        </div>
      )}
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
