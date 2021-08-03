import { css } from '@emotion/react'
import useAutoControlledState from 'hooks/useAutoControlledState'
import { useLockBodyScroll } from 'hooks/useLockBodyScroll'
import { useTransition } from 'hooks/useTransition'
import React from 'react'
import reactDom from 'react-dom'
import { ModalBackground, ModalChilren, ModalContainer } from './styled'

const transitionStyles = {
  initial: css`
    opacity: 0;
  `,
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

const childrenTransitionStles = {
  initial: css`
    transform: translateY(-40px);
  `,
  entering: css`
    transform: translateY(0px);
  `,
  entered: css`
    transform: translateY(0px);
  `,
  exiting: css`
    transform: translateY(-40px);
  `,
  exited: css`
    transform: translateY(-40px);
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

  const state = useTransition({ onOff: openState, timeout: 300 })

  useLockBodyScroll(openState, {
    timeout: 400,
  })

  function handleClickConatiner() {
    setOpenState(false)
  }

  return reactDom.createPortal(
    state !== 'exited' && (
      <ModalContainer
        className='Modal'
        onClick={handleClickConatiner}
        css={css`
          opacity: 0;
          ${transitionStyles[state]}
          transition: 0.4s;
        `}
        {...props}>
        <ModalBackground className='background' />
        <ModalChilren
          css={css`
            ${childrenTransitionStles[state]}
            transition: 0.4s cubic-bezier(.22,.93,.37,1.07);
          `}>
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
    ),
    // <Transition in={openState} timeout={500} classNames='modal' unmountOnExit>
    //   {(state) => (
    //   )}
    // </Transition>,
    document.body
  )
}
export default Modal
