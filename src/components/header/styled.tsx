import { forwardRef } from 'react'
import styled from 'styled-components'
import Container from '@/components/layout/container'

export const MenuItemStyled = forwardRef<
  any,
  {
    icon: JSX.Element
    text: string
    onClick?: () => void
  }
>(({ icon, text, onClick }, ref) => {
  return (
    <div className="menu-item" onClick={onClick} ref={ref}>
      <div className="menu-icon">{icon}</div>
      <span className="menu-text">{text}</span>
    </div>
  )
})

const HeaderWrap = styled.div`
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
      color: ${props => props.theme.$T0};
      margin-right: ${props => props.theme.$lg};
      line-height: 30px;
      display: flex;
      align-items: center;
      overflow: hidden;
      transition: all 0.2s;
      &:hover {
        color: ${props => props.theme.$RP0};
      }
      .menu-icon {
        width: 28px;
        font-size: 18px;
        flex-shrink: 0;
      }
      .menu-text {
        white-space: nowrap;
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
