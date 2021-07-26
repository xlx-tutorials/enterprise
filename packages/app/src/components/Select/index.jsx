import { css } from '@emotion/react'
import { useTheme } from 'contexts/ThemeProvider'
import React, { useRef, useState } from 'react'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import { useClickAway } from 'react-use'

function Input({ children, open, setOpen, ...props }) {
  const { theme } = useTheme()

  return (
    <div
      className='Input'
      css={css`
        padding: 8px 20px;
        background: ${theme.colors.black[6]};
        border-radius: 8px;
        border: ${theme.borders.base};
        display: flex;
        align-items: center;
        min-width: 120px;
      `}
      onClick={() => setOpen(!open)}
      {...props}>
      {children}{' '}
      <span
        style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
        {open ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
      </span>
    </div>
  )
}

function Options({
  selectedValue,
  setSelectedValue,
  onChange,
  children,
  open,
  setOpen,
  ...props
}) {
  if (!open) return null
  return (
    <div className='Options' {...props}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          selectedValue,
          setSelectedValue,
          onChange,
        })
      )}
    </div>
  )
}

function Option({
  selectedValue,
  setSelectedValue,
  children,
  value,
  onChange = () => {},
  onClick = () => {},
  ...props
}) {
  function handleClick(ev) {
    setSelectedValue(value)
    onClick(ev, value)
    onChange(value)
  }

  return (
    <div className='Option' onClick={handleClick} {...props}>
      {children}
    </div>
  )
}

function Select({ defaultValue, onChange, children, ...props }) {
  const { theme } = useTheme()
  const [selectedValue, setSelectedValue] = useState(defaultValue)
  const [open, setOpen] = useState(false)

  React.Children.toArray(children).props.value

  const domRef = useRef()

  useClickAway(domRef, () => {
    setOpen(false)
  })

  const formatedChildren = React.Children.toArray(
    children[1].props.children
  ).map((child) => child.props)

  const selectedInput = formatedChildren.find(
    (child) => child.value === selectedValue
  ).children

  return (
    <div
      className='Select'
      css={css`
        display: inline-flex;
        flex-direction: column;
        align-items: center;
      `}
      ref={domRef}
      {...props}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          // Input
          ...(child.type.name === Input.name && {
            children: selectedInput,
          }),
          // Options
          ...(child.type.name === Options.name && {
            selectedValue,
            setSelectedValue,
            onChange,
          }),
          open,
          setOpen,
        })
      )}
    </div>
  )
}

Select.Input = Input
Select.Options = Options
Select.Option = Option

export default Select
