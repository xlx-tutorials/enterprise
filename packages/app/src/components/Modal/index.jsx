import useAutoControlledState from 'hooks/useAutoControlledState'
import { useLockBodyScroll } from 'hooks/useLockBodyScroll'
import reactDom from 'react-dom'
import { ModalBackground, ModalContainer } from './styled'

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

  function handleClickBg() {
    setOpenState(false)
  }

  if (!openState) return null
  return reactDom.createPortal(
    <ModalContainer className='Modal' {...props}>
      <ModalBackground className='background' onClick={handleClickBg} />
      {children}
    </ModalContainer>,
    document.body
  )
}
export default Modal
