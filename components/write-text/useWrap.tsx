import { useMemo } from 'react'
import styled, { keyframes } from 'styled-components'

const writer = keyframes`
  50% {
    border-color: transparent;
  }
`

const useWrap = (text: string) => {
  const type = keyframes`
    from {
      width: 0;
    }
    to {
      width: 21ch;
    }
  `
  const type2 = keyframes`
      from {
        width: 16ch;
        content: ${text}
      }
      to {
        width: 20ch;
        content: ${text}
      }
    `
  const type3 = keyframes`
      from {
        width: 20ch;
        content: ${text}
      }
      to {
        width: 42ch;
        content: ${text}
      }
    `
  const deleteKeyframes = keyframes`
    from {
      width: 21ch;
    }
    to {
      width: 16ch;
    }
  `
  const Wrap = styled.div`
    width: 21ch;
    border-right: 0.1em solid black;
    font-family: monospace;
    font-size: 2em;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
    &.animate {
      animation: ${type} 2.5s steps(20), ${writer} 1s infinite alternate,
        ${deleteKeyframes} 0.5s steps(5) 2.5s, type2 1s steps(4) 3s forwards,
        ${type3} 3s steps(22, end) 6s forwards;
      &::before {
        /* content: ${text}; */
        animation: ${type2} 1s steps(4) 3s forwards,
          ${type3} 3s steps(22, end) 6s forwards;
      }
    }
  `
  return {
    Wrap,
  }
}

export default useWrap
