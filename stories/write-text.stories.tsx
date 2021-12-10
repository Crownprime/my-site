import WriteText from '@/components/write-text'
import { useSpringRef, useChain } from 'react-spring'

export default {
  title: 'WriteText',
  component: WriteText,
}

export const Demo = () => {
  const firstRef = useSpringRef()
  const secRef = useSpringRef()
  useChain([firstRef, secRef])
  return (
    <div style={{ paddingTop: 200 }}>
      <WriteText
        prime="Hello, World!"
        final="Hello, React Spring!"
        isEndWhenFinish={true}
        aRef={firstRef}
      />
      <WriteText prime="I am July." aRef={secRef} />
    </div>
  )
}
