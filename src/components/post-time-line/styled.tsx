import styled from 'styled-components'

export const TimeLineStyled = styled.div`
  display: flex;
  max-width: 800px;
  margin: 0 auto;
  .year {
    width: 100px;
    text-align: right;
    flex-grow: 0;
    flex-shrink: 0;
    color: ${props => props.theme.$T1};
    position: relative;
    padding-right: ${props => props.theme.$lg};
    &::before {
      content: '';
      width: 2px;
      height: 100%;
      background: ${props => props.theme.$T0};
      position: absolute;
      top: 10px;
      right: -1px;
    }
    &::after {
      content: '';
      width: 12px;
      height: 12px;
      border-radius: 100%;
      background: ${props => props.theme.$T0};
      position: absolute;
      top: 8px;
      right: -6px;
      box-shadow: 0 0 0 3px ${props => props.theme.$T1};
    }
  }
  .posts {
    flex-shrink: 1;
    flex-grow: 1;
    .post {
      padding-left: ${props => props.theme.$lg};
      color: ${props => props.theme.$T0};
      margin-top: ${props => props.theme.$xl};
      position: relative;
      &::after {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background: ${props => props.theme.$T0};
        position: absolute;
        top: 31px;
        left: -4px;
        box-shadow: 0 0 0 2px ${props => props.theme.$T1};
      }
    }
  }
`
