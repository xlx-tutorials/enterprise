// body height = '100vh'

import { useLayoutEffect } from 'react'

// body overflow = 'hidden'
function useLockBodyScroll(isLock = false) {
  useLayoutEffect(() => {
    const { body } = window.document
    const scrollbarWidth = window.innerWidth - body.clientWidth

    if (isLock) {
      body.style.height = '100vh'
      body.style.overflow = 'hidden'
      body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      body.style.height = 'unset'
      body.style.overflow = 'unset'
      body.style.paddingRight = 'unset'
    }
  }, [isLock])
}

export { useLockBodyScroll }
