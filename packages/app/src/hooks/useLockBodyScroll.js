import { useLayoutEffect, useRef } from 'react'

function lock() {
  const { body } = window.document
  const scrollbarWidth = window.innerWidth - body.clientWidth
  body.style.height = '100vh'
  body.style.overflow = 'hidden'
  body.style.paddingRight = `${scrollbarWidth}px`
}

function unLock() {
  const { body } = window.document
  body.style.height = 'unset'
  body.style.overflow = 'unset'
  body.style.paddingRight = 'unset'
}

function useLockBodyScroll(isLock = false, { timeout } = {}) {
  const timerRef = useRef()

  useLayoutEffect(() => {
    clearInterval(timerRef.current)

    if (isLock) {
      lock()
    } else if (timeout) {
      timerRef.current = setTimeout(unLock, timeout)
    } else {
      unLock()
    }
  }, [isLock])
}

export { useLockBodyScroll }
