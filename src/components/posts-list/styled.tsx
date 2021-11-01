import { FC } from 'react'
import styled from 'styled-components'
import Container from '@/components/layout/container'
import { AlarmIcon, StyleIcon } from '@/components/icons'

const PostListWrap = styled.div`
  background: ${props => props.theme.$N000};
  border-radius: ${props => props.theme.$sm};
  padding: ${props => props.theme.$md};
`

const PostItemWrap = styled.div`
  margin-top: ${props => props.theme.$md};
  margin-bottom: ${props => props.theme.$lg};
  .post-item-top {
    .title-block {
      color: ${props => props.theme.$N700};
      span {
        cursor: pointer;
        font-size: 24px;
      }
    }
    .sub-block {
      font-size: 16px;
      color: ${props => props.theme.$N500};
      margin-top: 8px;
    }
  }
  .post-item-btm {
    margin-top: 20px;
    display: flex;
    .tip {
      font-size: 14px;
      line-height: 24px;
      color: ${props => props.theme.$N500};
      margin-right: ${props => props.theme.$lg};
      span {
        margin-left: ${props => props.theme.$sm};
      }
      &.tags {
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
  }
`

export const PostItemStyled: FC<{
  date: string
  sub?: string
  tags?: string
}> = ({ sub, tags, date, children }) => {
  return (
    <PostItemWrap>
      <div className="post-item-top">
        <div className="title-block">
          <span>{children}</span>
        </div>
        {Boolean(sub) && <div className="sub-block">{sub}</div>}
      </div>
      <div className="post-item-btm">
        <div className="tip">
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
    </PostItemWrap>
  )
}

export const PostListStyled: FC = ({ children }) => {
  return (
    <Container>
      <PostListWrap>{children}</PostListWrap>
    </Container>
  )
}
