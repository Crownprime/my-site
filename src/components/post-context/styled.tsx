import { FC } from 'react'
import styled from 'styled-components'
import Container from '@/components/layout/container'
import { AlarmIcon, StyleIcon } from '@/components/icons'

const PostHeadWrap = styled.div`
  margin-top: ${props => props.theme.$HH};
  padding-top: ${props => props.theme.$md};
  .post-title {
    font-size: 30px;
    color: ${props => props.theme.$N600};
  }
  .post-sub {
    font-size: 14px;
    line-height: 24px;
    background: ${props => props.theme.$N100};
    padding: ${props => props.theme.$sm};
    border-radius: ${props => props.theme.$mn};
    color: ${props => props.theme.$N400};
    margin-top: ${props => props.theme.$md};
  }
  .post-tips {
    font-size: 14px;
    line-height: 24px;
    color: ${props => props.theme.$N400};
    margin-top: ${props => props.theme.$md};
    display: flex;
    align-items: center;
    .tip {
      margin-right: ${props => props.theme.$lg};
    }
    .tip span {
      margin-left: ${props => props.theme.$sm};
    }
    .tip.tags {
      position: relative;
      &::before {
        position: absolute;
        left: -15px;
        top: 5px;
        content: '';
        width: 1px;
        height: 14px;
        background: ${props => props.theme.$N400};
      }
    }
  }
`

export const PostHeadStyled: FC<{
  title: string
  date: string
  sub?: string
  tags?: string
}> = ({ title, date, sub, tags }) => {
  return (
    <PostHeadWrap>
      <Container>
        <div className="post-title">{title}</div>
        <div className="post-sub">「 {sub} 」</div>
        <div className="post-tips">
          <div className="tip date">
            <AlarmIcon />
            <span>{date}</span>
          </div>
          {Boolean(tags) && (
            <div className="tip tags">
              <StyleIcon />
              <span>{tags}</span>
            </div>
          )}
        </div>
      </Container>
    </PostHeadWrap>
  )
}
