import { css } from '@emotion/react'
import { useTheme } from 'contexts/ThemeProvider'
import { useRef, useState } from 'react'
import reactDom from 'react-dom'

function Toast({ open, children, onOpen = () => {}, onClose = () => {} }) {
  const { theme } = useTheme()
  const [message, setMessage] = useState(children)
  const timerRef = useRef()

  Toast.show = ({ timeout = 4000, message: showMessage } = {}) => {
    setMessage(showMessage)
    onOpen()
    timerRef.current = setTimeout(onClose, timeout)
  }

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
      <div className='toastContent'>{message ?? children}</div>
    </div>,
    document.querySelector('body')
  )
}

export default Toast
