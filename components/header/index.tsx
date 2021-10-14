import { useRouter } from 'next/router'
import Link from 'next/link'
import md5 from 'crypto-js/md5'
import SkeletonBlock from '../skeleton-block'

const routes = [
  {
    text: 'Home',
    pathname: '/',
  },
  {
    text: 'Category',
    pathname: '/category',
  },
]

const HeaderOwner = () => {
  const myName = 'July'
  const myEmail = 'MyCrown1234@hotmail.com'
  const emailMd5 = md5(myEmail.toLocaleLowerCase())
  const avatarUrl = 'https://www.gravatar.com/avatar/' + emailMd5 + '.jpg?s=200'
  return (
    <div className="flex items-center">
      <div className="h-[30px] w-[30px] rounded-full overflow-hidden">
        {/* <SkeletonBlock className="w-full h-full" /> */}
        <img src={avatarUrl} />
      </div>
      <div className="text-N-900 text-base ml-sm">{myName}</div>
    </div>
  )
}

const Header = () => {
  const { pathname } = useRouter()
  return (
    <div className="w-full h-[56px] mb-lg">
      <div className="w-full h-[56px] fixed top-0 left-0 shadow bg-N-0 z-10">
        <div className="container mx-auto flex items-center h-full justify-between">
          <div className="flex items-center h-full text-N-900">
            {routes.map(route => (
              <Link
                href={route.pathname}
                passHref={pathname === route.pathname}
              >
                <div className="mr-md cursor-pointer" key={route.pathname}>
                  {route.text}
                </div>
              </Link>
            ))}
          </div>
          <HeaderOwner />
        </div>
      </div>
    </div>
  )
}

export default Header
