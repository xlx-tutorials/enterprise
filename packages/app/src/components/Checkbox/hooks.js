import { useState } from 'react'

function useCheckbox(defaultValue = []) {
  const [value, setValue] = useState(defaultValue)

  console.log(value)

  function clear() {
    setValue([])
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

export { useCheckbox }
