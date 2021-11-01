import { FC, useMemo, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import cls from 'classnames'

const commonText = '"Hello, I\'m J'
const text0 = commonText + 'iangXujin"'
const text1 = commonText + 'uly. "'
const text2 = commonText + 'uly. Welcome to my Website!"'

const writer = keyframes`
  50% {
    border-color: transparent;
  }
`

const type = keyframes`
  from {
    width: 0;
  }
  to {
    width: ${text0.length}ch;
  }
`
const type2 = keyframes`
  from {
    width: ${commonText.length}ch;;
    content: ${text2};
  }
  to {
    width: ${text1.length - 2}ch;
    content: ${text2};
  }
`
const type3 = keyframes`
  from {
    width: ${text1.length - 2}ch;
    content: ${text2};
  }
  to {
    width: ${text2.length}ch;
    content: ${text2};
  }
`
const deleteKeyframes = keyframes`
  from {
    width: ${text0.length}ch;
  }
  to {
    width: ${commonText.length}ch;
  }
`

const Wrap = styled.div`
  height: 24px;
  line-height: 24px;
  border-right: 0.1em solid black;
  font-family: monospace;
  font-size: 20px;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  &.animate {
    width: ${text0.length}ch;
    animation: ${type} 2.5s steps(20), ${writer} 1s infinite alternate,
      ${deleteKeyframes} 0.5s steps(5) 2.5s, ${type2} 1s steps(4) 3s forwards,
      ${type3} 3s steps(22, end) 6s forwards;
    &::before {
      content: ${text0};
      animation: ${type2} 1s steps(4) 3s forwards,
        ${type3} 3s steps(22, end) 6s forwards;
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
  return <Wrap className={cls({ animate })} onClick={handleClick} />
}

export default WriteText
