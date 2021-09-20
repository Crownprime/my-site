import { useRouter } from 'next/router'
import Link from 'next/link'

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

const Header = () => {
  const { pathname } = useRouter()
  return (
    <div className="w-full h-[56px] mb-lg">
      <div className="w-full h-[56px] fixed top-0 left-0 shadow bg-white">
        <div className="container mx-auto flex items-center h-full text-N-900">
          {routes.map(route => (
            <Link href={route.pathname} passHref={pathname === route.pathname}>
              <div className="mr-sm cursor-pointer">{route.text}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
