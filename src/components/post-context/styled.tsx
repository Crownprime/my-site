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

const PostTextWrap = styled.div`
  display: flex;
  align-items: flex-start;
  .post-text-html {
    h1 {
      color: ${props => props.theme.$N800};
      font-size: 18px;
      line-height: 26px;
      padding-bottom: ${props => props.theme.$mn};
      margin: 24px 0 16px 0;
      font-weight: 500;
      border-bottom: 1px dashed ${props => props.theme.$N300};
      &::before {
        content: '#';
        color: ${props => props.theme.$N400};
        padding-right: ${props => props.theme.$sm};
      }
    }
    h2 {
      font-size: 18px;
      line-height: 24px;
      padding-top: ${props => props.theme.$sm};
      margin: ${props => props.theme.$lg} 0 ${props => props.theme.$md} 0;
      &::before {
        content: '##';
        color: ${props => props.theme.$N400};
        padding-right: ${props => props.theme.$sm};
      }
    }
    h3 {
      font-size: 16px;
      line-height: 22px;
      margin: ${props => props.theme.$md} 0 ${props => props.theme.$mn} 0;
      &::before {
        content: '###';
        color: ${props => props.theme.$N400};
        padding-right: ${props => props.theme.$sm};
      }
    }
    p {
      font-size: 16px;
      line-height: 30px;
      font-weight: 400;
      margin-top: 16px;
      margin-bottom: 16px;
      color: ${props => props.theme.$N800};
      letter-spacing: 0.02em;
      > code {
        background: ${props => props.theme.$N800};
        color: ${props => props.theme.$N300};
        padding: 2px ${props => props.theme.$sm};
        border-radius: ${props => props.theme.$mn};
      }
      > a {
        font-style: italic;
        text-decoration: underline;
        padding: 0 4px;
      }
    }
    code {
      font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
        DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
    }
    pre {
      background: ${props => props.theme.$N800};
      border-radius: ${props => props.theme.$mn};
      padding: ${props => props.theme.$sm};
      width: 100%;
      overflow-x: auto;
      margin: ${props => props.theme.$md} 0;
      code {
        color: ${props => props.theme.$N300};
        font-size: 14px;
      }
    }
    blockquote {
      border-left: 2px solid #8f959e;
      padding-left: 8px;
      p {
        color: #8f959e;
      }
    }
    ul {
      padding-left: 8px;
      > li > p {
        margin: 0;
        position: relative;
        padding-left: 20px;
        &::before {
          position: absolute;
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 6px;
          background: ${props => props.theme.$N400};
          left: 5px;
          top: 12px;
        }
      }
    }
  }
  .post-text-toc {
    width: 200px;
    flex-shrink: 0;
    position: sticky;
    top: ${props => props.theme.$HH};
    padding-left: ${props => props.theme.$md};
    li {
      margin-bottom: 8px;
      a {
        font-size: 14px;
        padding: 6px;
        color: ${props => props.theme.$N700};
        &:hover {
          color: ${props => props.theme.$N800};
        }
      }
    }
    ul {
      padding-left: 12px;
    }
  }
  @media screen and (max-width: 1040px) {
    .post-text-toc {
      display: none;
    }
  }
`

export const PostTextStyled: FC<{
  html: JSX.Element
  toc: JSX.Element
}> = ({ html, toc }) => {
  return (
    <PostTextWrap>
      <div className="post-text-html">{html}</div>
      <div className="post-text-toc">{toc}</div>
    </PostTextWrap>
  )
}
