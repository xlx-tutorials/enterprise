import { useState } from 'react'
import useUpdateEffect from './useUpdateEffect'

export default function useAutoControlledState({
  value,
  defaultValue,
  onChange = () => {},
}) {
  if (value !== undefined && defaultValue !== undefined) {
    throw new Error(
      `useAutoControlledState cannot contains both value and defaultValue props.`
    )
  }

  let [state, setState] = useState(defaultValue)

  // trigger onChange when defaultValue state change
  useUpdateEffect(() => {
    if (value === undefined) onChange(state)
  }, [state])

  // trigger onChange when value state change
  if (defaultValue === undefined) {
    state = value
    setState = (valueOrCallback) => {
      if (typeof valueOrCallback === 'function') {
        const newState = valueOrCallback(state)
        onChange(newState)
      } else {
        onChange(valueOrCallback)
      }
    }
  }

  return [state, setState]
}
