import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Page from 'components/Page'
import { useTheme } from 'contexts/ThemeProvider'

const Button = styled.button`
  color: ${(props) => props.theme.colors.primary};
`

function HomePage() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Page className='HomePage'>
      <button
        type='button'
        css={css`
          color: ${theme.textColor.primary};
        `}
        onClick={toggleTheme}>
        Click Me
      </button>

      <Button>Click Me</Button>
    </Page>
  )
}

export default HomePage
