import { useRouter } from 'next/router'
import WriteText from '@/components/write-text'
import HoverButton from '@/components/hover-button'
import styled from 'styled-components'

const CoverStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .expand {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: ${props => props.theme.$lg};
  }
`

const Cover = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push('/category')
  }
  return (
    <CoverStyled>
      <WriteText />
      <div className="expand">
        <HoverButton onClick={handleClick} />
      </div>
    </CoverStyled>
  )
}

export default Cover
