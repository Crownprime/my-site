import { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import cls from 'classnames'

const writer = keyframes`
  50% {
    border-color: rgba(0, 0, 0, .85);
  }
`

const firstlyCommonText = 'Hello, I am J'
// 第一次写出的字符串
const firstlyText0 = firstlyCommonText + 'iangXujin'
const firstlyText1 = firstlyCommonText + 'uly. '

const secondaryText = 'Welcome to my Website! '
// 1.先写下字符串 firstlyText0
const firstlyWriteAction0 = keyframes`
  from {
    width: 0;
  }
  to {
    width: ${firstlyText0.length}ch;
  }
`
// 2.删减长度到 firstlyCommonText
const firstlyDeleteAction = keyframes`
  from {
    width: ${firstlyText0.length}ch;
  }
  to {
    width: ${firstlyCommonText.length}ch;
  }
`
// 3. 增加长度到 firstlyText1
const firstlyWriteAction1 = keyframes`
  from {
    width: ${firstlyCommonText.length}ch;;
    content: "${firstlyText1}";
  }
  to {
    width: ${firstlyText1.length}ch;
    content: "${firstlyText1}";
  }
`

const secondaryWriteAction = keyframes`
  from {
    width: 0
  }
  to {
    width: ${secondaryText.length}ch
  }
`

const Wrap = styled.div`
  width: 300px;
  font-family: monospace;
  cursor: pointer;
  color: ${props => props.theme.$T0};
  .firstly,
  .secondary {
    border-right: 0.1em solid transparent;
    overflow: hidden;
    white-space: nowrap;
  }
  &.animate {
    .firstly {
      width: ${firstlyText0.length}ch;
      animation: ${firstlyWriteAction0} 2.5s steps(22), ${writer} 1s 5 alternate,
        ${firstlyDeleteAction} 0.5s steps(9) 2.5s,
        ${firstlyWriteAction1} 1s steps(5) 3s forwards;
      &::before {
        content: '${firstlyText0}';
        animation: ${firstlyWriteAction1} 1s steps(4) 3s forwards;
      }
    }
    .secondary {
      width: 0;
      animation: ${writer} 1s 5s infinite alternate,
        ${secondaryWriteAction} 3s steps(22) 5.5s forwards;
      &::before {
        content: '${secondaryText}';
      }
    }
  }
`

const WriteText = () => {
  const [animate, setAnimate] = useState(true)
  const timeRef = useRef<NodeJS.Timeout | 0>(0)
  const handleClick = () => {
    setAnimate(false)
    timeRef.current && clearTimeout(timeRef.current)
    timeRef.current = setTimeout(() => {
      setAnimate(true)
    }, 100)
  }
  return (
    <Wrap className={cls({ animate }, 'text-xl')} onClick={handleClick}>
      <div className="firstly mb-sm"></div>
      <div className="secondary"></div>
    </Wrap>
  )
}

export default WriteText
