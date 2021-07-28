import styled from '@emotion/styled'

const HeaderTitle = styled.div`
  padding: 12px 40px;
  background: ${({ theme }) => theme.buttons.primary.background};
  color: ${({ theme }) => theme.buttons.primary.textColor};
  flex-shrink: 0;
  border-radius: 2px;
  margin-right: 20px;
  font-size: ${({ theme }) => theme.fontSize.headline};
`

export { HeaderTitle }
