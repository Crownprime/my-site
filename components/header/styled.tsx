import { FC } from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import styled from 'styled-components'
import Container from 'components/layout/container'
import theme from 'styles/theme'

const HeaderShadow: FC<{ className?: string }> = ({ children, className }) => {
  const { scrollY } = useViewportScroll()
  const boxShadow = useTransform(scrollY, val =>
    val > 20 ? `1px 0 5px ${theme.$N300}` : '',
  )
  return (
    <motion.div className={className} style={{ boxShadow }}>
      {children}
    </motion.div>
  )
}

const HeaderWrap = styled(HeaderShadow)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.theme.$HH};
  background: ${props => props.theme.$N000};
  z-index: 10;
  .header-menus {
    display: flex;
    align-items: center;
    height: 100%;
    .header-menus-link {
      cursor: pointer;
      font-size: 16px;
      color: ${props => props.theme.$N800};
      margin-right: ${props => props.theme.$lg};
      height: ${props => props.theme.$HH};
      display: flex;
      align-items: center;
      span {
        margin-left: ${props => props.theme.$mini};
      }
    }
  }
`

export const HeaderStyled = ({ children }) => {
  return (
    <HeaderWrap>
      <Container>
        <div className="header-menus">{children}</div>
      </Container>
    </HeaderWrap>
  )
}
