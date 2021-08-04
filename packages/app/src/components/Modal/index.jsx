import useAutoControlledState from 'hooks/useAutoControlledState'
import { useLockBodyScroll } from 'hooks/useLockBodyScroll'
import { useTransition } from 'hooks/useTransition'
import reactDom from 'react-dom'
import './modal.css'
import { ModalBackground, ModalChildren, ModalContainer } from './styled'

/* 
  进场
  keyframe {
    from {
      opacity: 0; //1
    }
    to {
      opacity: 1;
    }
  }
  出场
*/

// const bgAnimation = {
//   entering: { opacity: 1 },
//   entered: { opacity: 1 },
//   exiting: { opacity: 0 },
//   exited: { opacity: 0 },
// }

// const childrenAnimation = {
//   entering: { transform: 'translateY(0px)' },
//   entered: { transform: 'translateY(0px)' },
//   exiting: { transform: 'translateY(-40px)', transition: '.3s' },
//   exited: { transform: 'translateY(-40px)' },
// }

const timeout = 300
const bgAnimation = {
  from: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  },
  leave: {
    opacity: 0,
  },
}
const childrenAnimation = {
  from: {
    transform: 'translateY(-40px) scale(1.2)',
  },
  enter: {
    transform: 'translateY(0px)',
  },
  leave: {
    transform: 'translateY(-40px) scale(.6)',
  },
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
  const { state, onMount } = useTransition({ onOff: openState, timeout })

  useLockBodyScroll(openState, { timeout })

  function handleClickBg() {
    setOpenState(false)
  }

  if (!onMount) return null
  return reactDom.createPortal(
    <ModalContainer
      className='Modal'
      style={{
        transition: '.3s',
        ...bgAnimation[state],
      }}
      {...props}>
      <ModalBackground className='background' onClick={handleClickBg} />
      <ModalChildren
        className='Children'
        style={{
          transition: '.3s cubic-bezier(.02,.68,.33,1.11)',
          ...childrenAnimation[state],
        }}>
        {children}
      </ModalChildren>
    </ModalContainer>,
    document.body
  )
}
export default Modal
