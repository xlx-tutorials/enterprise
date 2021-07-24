import styled from '@emotion/styled'

const Block = styled.article`
  background-color: ${({ theme }) => theme.colors.block};
  border: ${({ theme }) => theme.borders.base};
  display: flex;
  flex-direction: column;
`

export { Block }
