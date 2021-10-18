import WriteText from 'components/write-text'

const Cover = () => {
  return (
    <div className="home-cover">
      <WriteText />
      <style jsx>{`
        .home-cover {
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}

export default Cover
