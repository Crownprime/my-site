import { useRouter } from 'next/router'
import Link from 'next/link'
import { HomeIcon, DashboardIcon } from 'components/icons'
import { HeaderStyled, MenuItemStyled } from './styled'

const routes = [
  {
    text: '首页',
    pathname: '/',
    icon: <HomeIcon />,
  },
  {
    text: '归档',
    pathname: '/category',
    icon: <DashboardIcon />,
  },
]

const Header = () => {
  const { pathname } = useRouter()
  return (
    <HeaderStyled>
      {routes.map(route => (
        <Link
          href={route.pathname}
          passHref={pathname === route.pathname}
          key={route.pathname}
        >
          <MenuItemStyled icon={route.icon} text={route.text} />
        </Link>
      ))}
    </HeaderStyled>
  )
}

export default Header
