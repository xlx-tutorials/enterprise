import { css } from '@emotion/react'
import useAutoControlledState from 'hooks/useAutoControlledState'
import { useLockBodyScroll } from 'hooks/useLockBodyScroll'
import { useTransition } from 'hooks/useTransition'
import { useTransition2 } from 'hooks/useTransition2'
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

  const { onMount, state } = useTransition2({ onOff: openState })

  useLockBodyScroll(openState, {
    timeout: 400,
  })

  function handleClickConatiner() {
    setOpenState(false)
  }

  return reactDom.createPortal(
    onMount && (
      <ModalContainer
        className='Modal'
        onClick={handleClickConatiner}
        css={css`
          opacity: ${{
            from: 0,
            enter: 1,
            leave: 0,
          }[state]};
          transition: 0.4s;
        `}
        {...props}>
        <ModalBackground className='background' />
        <ModalChilren
          css={css`
            transform: ${{
              from: 'translateY(-40px)',
              enter: 'translateY(0px)',
              leave: 'translateY(-40px)',
            }[state]};
            transition: 0.2s ease-out;
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
