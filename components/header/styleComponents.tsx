import Container from 'components/layout/container'
import styles from './styles.module.scss'
export const HeaderWrap = ({ children }) => {
  return (
    <div className={styles.header}>
      <Container>
        <div className="header-menus">{children}</div>
      </Container>
    </div>
  )
}
