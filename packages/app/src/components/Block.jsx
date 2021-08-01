import styled from '@emotion/styled'

const Block = styled.article`
  background-color: ${({ theme }) => theme.colors.block};
  border: ${({ theme }) => theme.borders.base};
  display: flex;
  flex-direction: column;
`

const SubBlock = styled.section`
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
`

export { Block, SubBlock }
