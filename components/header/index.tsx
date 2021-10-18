import { useRouter } from 'next/router'
import Link from 'next/link'
// import md5 from 'crypto-js/md5'
import Container from 'components/layout/container'
import SkeletonBlock from '../skeleton-block'
import { HomeIcon, DashboardIcon } from 'components/icons'
import { HeaderWrap } from './styleComponents'

const routes = [
  {
    text: '首页',
    pathname: '/',
    Icon: HomeIcon,
  },
  {
    text: '归档',
    pathname: '/category',
    Icon: DashboardIcon,
  },
]

// const HeaderOwner = () => {
//   const myName = 'July'
//   const myEmail = 'MyCrown1234@hotmail.com'
//   const emailMd5 = md5(myEmail.toLocaleLowerCase())
//   const avatarUrl = 'https://www.gravatar.com/avatar/' + emailMd5 + '.jpg?s=200'
//   return (
//     <div className="flex items-center">
//       <div className="h-[30px] w-[30px] rounded-full overflow-hidden">
//         {/* <SkeletonBlock className="w-full h-full" /> */}
//         <img src={avatarUrl} />
//       </div>
//       <div className="text-N-900 text-base ml-sm">{myName}</div>
//     </div>
//   )
// }

const Header = () => {
  const { pathname } = useRouter()
  return (
    <HeaderWrap>
      {routes.map(route => (
        <Link href={route.pathname} passHref={pathname === route.pathname}>
          <div className="header-menus-link" key={route.pathname}>
            <route.Icon /> <span>{route.text}</span>
          </div>
        </Link>
      ))}
    </HeaderWrap>
  )
}

export default Header
