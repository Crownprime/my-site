import styled from 'styled-components'

export const PostContentHtml = styled.div`
  h1 {
    font-size: 20px;
    line-height: 26px;
    margin: 24px 0 16px 0;
    font-weight: 500;
  }
  h2 {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 8px;
    font-weight: 500;
  }
  p {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 8px;
  }
  code {
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
  }
  pre {
    background-color: #212121;
    border-radius: 4px;
    padding: 4px;
    width: 100%;
    overflow-x: auto;
    margin-bottom: 8px;
    code {
      color: #aaaaaa;
      font-size: 14px;
    }
  }
`
