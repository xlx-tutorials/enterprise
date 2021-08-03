import useAutoControlledState from 'hooks/useAutoControlledState'
import { useLockBodyScroll } from 'hooks/useLockBodyScroll'
import { useEffect, useState } from 'react'
import reactDom from 'react-dom'
import { ModalBackground, ModalChildren, ModalContainer } from './styled'
import './modal.css'

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
  const [show, setShow] = useState(openState)

  useLockBodyScroll(openState, { timeout: 400 })

  useEffect(() => {
    if (openState) {
      setShow(true)
    }
  }, [openState])

  function handleClickBg() {
    setOpenState(false)
  }

  function handleAnimationEnd() {
    if (!openState) {
      setShow(false)
    }
  }

  if (!show) return null
  return reactDom.createPortal(
    <ModalContainer
      className={`Modal ${openState ? 'in' : 'out'}`}
      onAnimationEnd={handleAnimationEnd}
      {...props}>
      <ModalBackground className='background' onClick={handleClickBg} />
      <ModalChildren className={`Children ${openState ? 'in' : 'out'}`}>
        {children}
      </ModalChildren>
    </ModalContainer>,
    document.body
  )
}
export default Modal
