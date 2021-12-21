import { useCallback, useLayoutEffect, useRef, useState } from 'react'

export const useInView = (): [React.MutableRefObject<HTMLElement>, boolean] => {
  const ref = useRef()
  const [isView, setIsView] = useState(false)
  const cb = useCallback((entries: IntersectionObserverEntry[]) => {
    setIsView(Boolean(entries[0]?.isIntersecting))
  }, [])

  useLayoutEffect(() => {
    const ios = new IntersectionObserver(cb)
    if (ref.current) {
      ios.observe(ref.current)
    }
    return () => ios.disconnect()
  }, [ref.current])

  return [ref, isView]
}
