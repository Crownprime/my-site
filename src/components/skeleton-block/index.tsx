import React from 'react'
import styled from 'styled-components'

const SkeletonBlockWrap = styled.div`
  animation: 1.6s skeleton-loading ease-in-out infinite;
  background: linear-gradient(
    90deg,
    rgba(31, 35, 41, 0.05) 0%,
    rgba(31, 35, 41, 0.08) 50%,
    rgba(31, 35, 41, 0.05) 100%
  );
  background-size: 200% 100%;
  background-position-x: 0;
  border-radius: 2px;
`

const SkeletonBlock: React.FC<{
  className?: string
}> = ({ className }) => {
  return <SkeletonBlockWrap className={className} />
}

export default SkeletonBlock
