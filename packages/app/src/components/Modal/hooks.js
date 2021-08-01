import { useState } from 'react'

function useModal({ defaultOpen = false } = {}) {
  const [open, setOpen] = useState(defaultOpen)

  function toggle() {
    setOpen(!open)
  }

  const bind = () => ({
    open,
    onChange: setOpen,
  })

  return {
    open,
    setOpen,
    toggle,
    bind,
  }
}

export { useModal }
