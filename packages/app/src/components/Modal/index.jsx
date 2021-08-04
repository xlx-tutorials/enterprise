import useAutoControlledState from 'hooks/useAutoControlledState'
import { useLockBodyScroll } from 'hooks/useLockBodyScroll'
import reactDom from 'react-dom'
import { Transition } from 'react-transition-group'
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

const bgAnimation = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
}

const childrenAnimation = {
  entering: { transform: 'translateY(0px)' },
  entered: { transform: 'translateY(0px)' },
  exiting: { transform: 'translateY(-40px)', transition: '.3s' },
  exited: { transform: 'translateY(-40px)' },
}

/* 
  state = {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0}
  }
*/

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

  const timeout = 300

  useLockBodyScroll(openState, { timeout })

  function handleClickBg() {
    setOpenState(false)
  }

  return reactDom.createPortal(
    <Transition in={openState} timeout={timeout} unmountOnExit>
      {(state) => {
        return (
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
          </ModalContainer>
        )
      }}
    </Transition>,
    document.body
  )
}
export default Modal
