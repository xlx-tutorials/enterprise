import { css, keyframes } from '@emotion/react'
import useAutoControlledState from 'hooks/useAutoControlledState'
import { useLockBodyScroll } from 'hooks/useLockBodyScroll'
import React from 'react'
import reactDom from 'react-dom'
import { ModalBackground, ModalChilren, ModalContainer } from './styled'

const bgKeyframes = keyframes`
  from {
    opacity: 0;

  }

  to {
    opacity: 1;
  }
`

function Modal({
  children,
  defaultOpen,
  open,
  onChange = () => {},
  onOpen = () => {},
  onClose = () => {},
  ...props
}) {
  const [openState, setOpenState] = useAutoControlledState({
    value: open,
    defaultValue: defaultOpen,
    onChange: (newState) => {
      if (newState) {
        onOpen()
      } else {
        onClose()
      }

      onChange(newState)
    },
  })

  useLockBodyScroll(openState)

  function handleClickConatiner() {
    setOpenState(false)
  }

  if (!openState) return null
  return reactDom.createPortal(
    <ModalContainer className='Modal' onClick={handleClickConatiner} {...props}>
      <ModalBackground className='background' />
      <ModalChilren>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            onClick: (ev) => {
              ev.stopPropagation()
              child.onClick?.(ev)
            },
          })
        })}
      </ModalChilren>
    </ModalContainer>,
    document.body
  )
}
export default Modal
