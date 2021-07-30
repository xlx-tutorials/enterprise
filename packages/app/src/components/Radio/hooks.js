import { useRef, useState } from 'react'

function useRadio(defaultValue) {
  const [value, setValue] = useState(defaultValue)

  function clear() {
    setValue(undefined)
  }

  const bind = () => ({
    value,
    onChange: setValue,
  })

  return {
    value,
    setValue,
    clear,
    bind,
  }
}

/* 
  groupValue: [
    'apple',
    'apple',
    'banana'
  ]
*/
function useRadioGroup(defaultValue = []) {
  const [groupValue, setGroupValue] = useState(defaultValue)
  const lastSelectedValueRef = useRef()

  const bind = (index) => ({
    value: groupValue[index],
    onChange: (val) =>
      setGroupValue((prev) => {
        const newValue = [...prev]
        newValue[index] = val

        return newValue
      }),
  })

  function clear() {
    lastSelectedValueRef.current = groupValue
    setGroupValue([])
  }

  function recoverLastSelection() {
    setGroupValue(lastSelectedValueRef.current)
  }

  if (!lastSelectedValueRef.current) {
    // eslint-disable-next-line no-func-assign
    recoverLastSelection = false
  }

  return {
    groupValue,
    setGroupValue,
    bind,
    clear,
    recoverLastSelection,
  }
}

export { useRadio, useRadioGroup }
