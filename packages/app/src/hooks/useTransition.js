import { useRef, useState } from 'react'
import { useUpdateEffect } from 'react-use'

const TRANSITION_STATE_INITIAL = 'initial'
const TRANSITION_STATE_ENTERING = 'entering'
const TRANSITION_STATE_ENTERED = 'entered'
const TRANSITION_STATE_EXITING = 'exiting'
const TRANSITION_STATE_EXITED = 'exited'

function useTransition({ onOff, timeout = 400 } = {}) {
  const [state, setState] = useState(
    onOff ? TRANSITION_STATE_ENTERED : TRANSITION_STATE_EXITED
  )
  const timerRef = useRef()

  useUpdateEffect(() => {
    clearInterval(timerRef.current)
    if (onOff) {
      setState(TRANSITION_STATE_INITIAL)
      setTimeout(() => {
        setState(TRANSITION_STATE_ENTERING)
      }, 0)
      timerRef.current = setTimeout(() => {
        setState(TRANSITION_STATE_ENTERED)
      }, timeout)
    } else {
      setState(TRANSITION_STATE_EXITING)
      timerRef.current = setTimeout(() => {
        setState(TRANSITION_STATE_EXITED)
      }, timeout)
    }
  }, [onOff])

  return state
}

export { useTransition }
