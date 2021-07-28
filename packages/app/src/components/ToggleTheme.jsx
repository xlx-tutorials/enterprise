import { css } from '@emotion/react'
import { Button } from 'containers/DemoPage/components/Button'
import { useTheme } from 'contexts/ThemeProvider'
import { size } from 'polished'
import { RiContrast2Line, RiContrastLine } from 'react-icons/ri'
import { useLocalStorage } from 'react-use'

function ToggleTheme() {
  const { theme, switchTheme } = useTheme()
  const isDark = theme.mode === 'dark'
  const [, setMode] = useLocalStorage('themeMode', 'light')

  function handleClick() {
    if (isDark) {
      setMode('light')
      switchTheme('light')
    } else {
      setMode('dark')
      switchTheme('dark')
    }
  }

  return (
    <Button
      type='button'
      className='ToggleTheme'
      css={css`
        background: ${theme.colors.black[6]};
        ${size(40)};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
      onClick={handleClick}>
      {isDark ? <RiContrastLine size={16} /> : <RiContrast2Line />}
    </Button>
  )
}

export default ToggleTheme
