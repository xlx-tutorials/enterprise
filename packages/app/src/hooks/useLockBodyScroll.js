// body height = '100vh'

import { useLayoutEffect } from 'react'

const scrollBarWidth = window.innerWidth - document.body.offsetWidth

function useLockBodyScroll(isLock = false) {
  useLayoutEffect(() => {
    const { body } = window.document

    if (isLock) {
      body.style.height = '100vh'
      body.style.overflow = 'hidden'
      body.style.paddingRight = `${scrollBarWidth}px`
    } else {
      body.style.height = 'unset'
      body.style.overflow = 'unset'
      body.style.paddingRight = 'unset'
    }
  }, [isLock])
}

export { useLockBodyScroll }
