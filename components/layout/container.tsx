import React from 'react'
import cls from 'classnames'

const Container: React.FC<{
  className?: string
}> = ({ children, className }) => {
  return (
    <div className={cls('layout-container', className)}>
      {children}
      <style jsx>{`
        .layout-container {
          margin: 0 auto;
          width: 1200px;
        }
        @media screen and (max-width: 1280px) {
          .layout-container {
            width: 100%;
            padding: 0 16px;
          }
        }
      `}</style>
    </div>
  )
}

export default Container
