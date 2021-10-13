import React from 'react'

const Container: React.FC = ({ children }) => {
  return (
    <div className="layout-container">
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
