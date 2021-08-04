// body height = '100vh'

import { useLayoutEffect, useRef } from 'react'

const scrollBarWidth = window.innerWidth - document.body.offsetWidth

function lock() {
  const { body } = window.document
  body.style.height = '100vh'
  body.style.overflow = 'hidden'
  body.style.paddingRight = `${scrollBarWidth}px`
}

function unlock() {
  const { body } = window.document
  body.style.height = 'unset'
  body.style.overflow = 'unset'
  body.style.paddingRight = 'unset'
}

function useLockBodyScroll(isLock = false, { timeout } = {}) {
  const timerRef = useRef()

  useLayoutEffect(() => {
    clearTimeout(timerRef.current)

    const overScroll =
      window.innerHeight - document.documentElement.scrollHeight

    if (overScroll <= 0) {
      return
    }

    if (isLock) {
      lock()
    } else if (timeout) {
      timerRef.current = setTimeout(unlock, timeout)
    } else {
      unlock()
    }
  }, [isLock])
}

export { useLockBodyScroll }
