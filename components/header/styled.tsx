import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import cls from 'classnames'
import Container from 'components/layout/container'
import { useScrollY } from 'hooks'

const HeaderAction: FC<{
  className?: string
}> = ({ className, children }) => {
  const y = useScrollY()
  const [top, setTop] = useState(false)
  useEffect(() => {
    setTop(y > 100)
  }, [y])
  return <div className={cls(className, { top })}>{children}</div>
}

export const MenuItemStyled: FC<{
  icon: JSX.Element
  text: string
}> = ({ icon, text }) => {
  return (
    <div className="menu-item">
      <div className="menu-icon">
        <div className="menu-icon-block text-center">{icon}</div>
      </div>
      <span className="menu-text">{text}</span>
    </div>
  )
}

const HeaderWrap = styled(HeaderAction)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.theme.$HH};
  background: rgba(255, 255, 255, 0);
  z-index: 10;
  transition: all 0.4s;
  .header-menus {
    display: flex;
    align-items: center;
    justify-content: end;
    height: 100%;
    .menu-item {
      width: 60px;
      cursor: pointer;
      font-size: 16px;
      color: ${props => props.theme.$N600};
      margin-right: ${props => props.theme.$lg};
      line-height: 30px;
      display: flex;
      align-items: center;
      overflow: hidden;
      transition: all 0.4s;
      &:hover {
        color: ${props => props.theme.$N800};
        font-weight: 500;
      }
      .menu-icon {
        width: 28px;
        font-size: 18px;
        flex-shrink: 0;
        &-block {
          transition: transform 0.4s;
        }
      }
      .menu-text {
        transition: opacity 0.4s;
        white-space: nowrap;
      }
    }
  }
  &.top {
    background: rgba(255, 255, 255, 0.9);
    height: ${props => props.theme.$MHH};
    .menu-item {
      width: 28px;
      .menu-icon {
        &-block {
          transform: scale(1.4);
        }
      }
      .menu-text {
        opacity: 0;
      }
    }
  }
`

export const HeaderStyled = ({ children }) => {
  return (
    <HeaderWrap>
      <Container className="h-full">
        <div className="header-menus">{children}</div>
      </Container>
    </HeaderWrap>
  )
}

export default HeaderStyled
