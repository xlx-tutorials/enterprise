import { useState } from 'react'

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
    setGroupValue([])
  }

  return {
    groupValue,
    setGroupValue,
    bind,
    clear,
  }
}

export { useRadio, useRadioGroup }
