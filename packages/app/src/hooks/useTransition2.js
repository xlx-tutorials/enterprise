import { useRef, useState } from 'react'
import { useUpdateEffect } from 'react-use'

const TRANSITION_STATE_FROM = 'from'
const TRANSITION_STATE_ENTER = 'enter'
const TRANSITION_STATE_LEAVE = 'leave'

function useTransition2({ onOff = false, timeout = 300 } = {}) {
  const [state, setState] = useState(
    onOff ? TRANSITION_STATE_ENTER : TRANSITION_STATE_LEAVE
  )
  const [onMount, setOnMount] = useState(onOff)
  const timer = useRef()

  useUpdateEffect(() => {
    clearInterval(timer.current)

    if (onOff) {
      setOnMount(true)
      setState(TRANSITION_STATE_FROM)
      setTimeout(() => {
        setState(TRANSITION_STATE_ENTER)
      }, 0)

      // timer.current = setTimeout(() => {
      //   setState(TRANSITION_STATE_ENTER)
      // }, timeout)
    } else {
      setState(TRANSITION_STATE_LEAVE)
      timer.current = setTimeout(() => {
        setOnMount(false)
      }, timeout)
    }
  }, [onOff])

  return {
    onMount,
    state,
  }
}

export { useTransition2 }
