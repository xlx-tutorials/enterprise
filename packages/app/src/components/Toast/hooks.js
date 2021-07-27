import { useRef, useState } from 'react'

function useToast(defaultOpen) {
  const [openState, setOpenState] = useState(defaultOpen)
  const timerRef = useRef()

  function open({ timeout = 4000 }) {
    setOpenState(true)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setOpenState(false)
    }, timeout)
  }

  function close() {
    setOpenState(false)
    clearTimeout(timerRef.current)
  }

  const bind = () => ({
    open: openState,
  })

  return {
    open,
    openState,
    bind,
    close,
  }
}

export { useToast }
