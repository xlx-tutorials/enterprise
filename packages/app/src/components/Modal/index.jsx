import { css } from '@emotion/react'
import useAutoControlledState from 'hooks/useAutoControlledState'
import { useLockBodyScroll } from 'hooks/useLockBodyScroll'
import React from 'react'
import reactDom from 'react-dom'
import { Transition } from 'react-transition-group'
import { ModalBackground, ModalChilren, ModalContainer } from './styled'

const transitionStyles = {
  entering: css`
    opacity: 1;
  `,
  entered: css`
    opacity: 1;
  `,
  exiting: css`
    opacity: 0;
  `,
  exited: css`
    opacity: 0;
  `,
}

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

  return reactDom.createPortal(
    <Transition in={openState} timeout={500} classNames='modal' unmountOnExit>
      {(state) => (
        <ModalContainer
          className='Modal'
          onClick={handleClickConatiner}
          css={css`
            opacity: 0;
            ${transitionStyles[state]}
            transition: 0.2s;
          `}
          {...props}>
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
        </ModalContainer>
      )}
    </Transition>,
    document.body
  )
}
export default Modal
