import { css } from '@emotion/react'
import { useTheme } from 'contexts/ThemeProvider'
import reactDom from 'react-dom'

function Toast({ open, children }) {
  const { theme } = useTheme()

  if (!open) return null
  return reactDom.createPortal(
    <div
      className='Toast'
      css={css`
        position: fixed;
        z-index: 1001;
        bottom: 0;
        width: 100%;
        height: 14vh;
        display: flex;
        align-items: center;
        justify-content: center;

        .toastContent {
          padding: 12px 20px;
          background: ${theme.colors.black[90]};
          color: ${theme.colors.white.base};
          border-radius: 200px;
          min-width: 120px;
          text-align: center;
        }
      `}>
      <div className='toastContent'>{children}</div>
    </div>,
    document.querySelector('body')
  )
}

export default Toast
