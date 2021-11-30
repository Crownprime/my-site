import { LoyaltyIcon } from '@/components/icons'
import styled from 'styled-components'

const Tag = ({ text }: { text: string }) => {
  return (
    <span className="tag text-sm text-$T0 hover:bg-$T5 px-mn py-ii rounded cursor-pointer">
      <LoyaltyIcon />
      <span className="ml-mn">{text}</span>
    </span>
  )
}

const TagsStyled = styled.div`
  display: inline-flex;
  .tag:not(:last-child) {
    margin-right: ${props => props.theme.$mn};
  }
`

export const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <TagsStyled>
      {tags.map(t => (
        <Tag text={t} key={t} />
      ))}
    </TagsStyled>
  )
}

export default Tag
