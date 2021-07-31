import styled from '@emotion/styled'
import { navigate } from '@reach/router'
import { Button } from 'containers/DemoPage/components/Button'

const StyledHeaderTitle = styled(Button)`
  padding: 12px 40px;
  background: ${({ theme }) => theme.buttons.primary.background};
  color: ${({ theme }) => theme.buttons.primary.textColor};
  flex-shrink: 0;
  border-radius: 2px;
  margin-right: 20px;
  font-size: ${({ theme }) => theme.fontSize.headline};
`

function HeaderTitle({ onClick = () => {}, ...props }) {
  function handleClick(ev) {
    onClick(ev)
    navigate('/')
  }

  return <StyledHeaderTitle onClick={handleClick} {...props} />
}

export { HeaderTitle }
