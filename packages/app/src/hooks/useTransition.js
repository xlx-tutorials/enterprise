import { useEffect, useRef, useState } from 'react'

const TRANSITION_STATE_FROM = 'from'
const TRANSITION_STATE_ENTER = 'enter'
const TRANSITION_STATE_LEAVE = 'leave'

function useTransition({ onOff = false, timeout = 300 }) {
  const [state, setState] = useState(
    onOff ? TRANSITION_STATE_ENTER : TRANSITION_STATE_LEAVE
  )
  const [onMount, setOnMount] = useState(onOff)
  const timerRef = useRef()

  useEffect(() => {
    clearTimeout(timerRef.current)

    if (onOff) {
      setState(TRANSITION_STATE_FROM)
      setOnMount(true)
      timerRef.current = setTimeout(() =>
        setState(setState(TRANSITION_STATE_ENTER))
      )
    } else {
      setState(TRANSITION_STATE_LEAVE)
      timerRef.current = setTimeout(() => {
        setOnMount(false)
      }, timeout)
    }
  }, [onOff])

  return {
    state,
    onMount,
  }
}

export { useTransition }
