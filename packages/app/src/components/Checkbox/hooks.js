import { useState } from 'react'

function useCheckbox(defaultValue = []) {
  const [value, setValue] = useState(defaultValue)

  function clear() {
    setValue(undefined)
  }

  console.log(value)

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

export { useCheckbox }
