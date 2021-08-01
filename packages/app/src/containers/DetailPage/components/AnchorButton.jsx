import { css } from '@emotion/react'
import { Button } from 'containers/DemoPage/components/Button'
import { useTheme } from 'contexts/ThemeProvider'

function AnchorButton({ children, onClick = () => {}, targetRef, ...props }) {
  const { theme } = useTheme()

  function handleClick() {
    const dom = targetRef.current
    dom?.scrollIntoView({ behavior: 'smooth' })
    onClick()
  }

  return (
    <Button
      className='AnchorButton'
      onClick={handleClick}
      css={css`
        padding: 10px 14px;
        border: ${theme.borders.button};
        border-radius: 2px;
        margin-right: 18px;
        margin-bottom: 12px;

        &:disabled {
          border: none;
          background: ${theme.colors.black[10]};
        }
      `}
      {...props}>
      {children}
    </Button>
  )
}

export default AnchorButton
