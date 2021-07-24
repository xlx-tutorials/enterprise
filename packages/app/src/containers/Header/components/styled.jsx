import styled from '@emotion/styled'

const HeaderTitle = styled.div`
  padding: 12px 40px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white.base};
  flex-shrink: 0;
  border-radius: 2px;
  margin-right: 20px;
  font-size: ${({ theme }) => theme.fontSize.headline};
`

export { HeaderTitle }
