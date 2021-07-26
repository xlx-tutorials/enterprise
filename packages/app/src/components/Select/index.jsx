import useAutoControlledState from 'hooks/useAutoControlledState'
import React, { useContext, useState } from 'react'

const SelectContext = React.createContext()

function Option({ value, children, onClick = () => {}, ...props }) {
  const context = useContext(SelectContext)
  if (context === undefined)
    throw new Error('Select.Option must be used within Select')

  const { selectedValue, setSelectedValue } = context

  function handleClick() {
    setSelectedValue(value)
    onClick(value)
  }

  return (
    <div className='Option' onClick={handleClick} {...props}>
      {children}
    </div>
  )
}

function Select({
  children,
  value,
  defaultValue,
  onChange = () => {},
  ...props
}) {
  const [selectedValue, setSelectedValue] = useAutoControlledState({
    defaultValue,
    value,
    onChange,
  })

  const contextValue = {
    selectedValue,
    setSelectedValue,
  }

  const selectedInput = React.Children.toArray(children)
    .map((child) => child.props)
    .find((child) => child.value === selectedValue)?.children

  return (
    <SelectContext.Provider value={contextValue}>
      <div className='Select' {...props}>
        <div className='input'>{selectedInput}</div>
        <div className='options'>{children}</div>
      </div>
    </SelectContext.Provider>
  )
}

Select.Option = Option

export { Select }
