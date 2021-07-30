import { css } from '@emotion/react'
import useAutoControlledState from 'hooks/useAutoControlledState'
import React, { useContext } from 'react'
import { themeCSS } from 'utils/themeCSS'
import { RadioCircle } from './styled'

const radioCSS = themeCSS(
  (theme) => css`
    display: flex;
    align-items: center;
  `
)

const optionCSS = themeCSS(
  (theme) => css`
    margin-right: 18px;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;

    &:last-of-type {
      margin-right: none;
    }
  `
)

const RadioContext = React.createContext()

function Radio({ value, defaultValue, onChange, children, ...props }) {
  const [selectedValue, setSelectedValue] = useAutoControlledState({
    value,
    defaultValue,
    onChange,
  })

  return (
    <RadioContext.Provider
      value={{
        selectedValue,
        setSelectedValue,
      }}>
      <div className='Radio' css={radioCSS} {...props}>
        {children}
      </div>
    </RadioContext.Provider>
  )
}

function Option({
  value,
  children,
  active,
  renderCircle: RenderCircle,
  noCircle,
  onClick = () => {},
  ...props
}) {
  const context = useContext(RadioContext)
  if (context === undefined) {
    throw new Error('Option Must be used within Radio')
  }

  const { selectedValue, setSelectedValue } = context
  const isActive = selectedValue === value

  function handleClick(ev) {
    setSelectedValue(value)
    onClick(ev)
  }

  const circle = RenderCircle ? (
    <RenderCircle active={isActive} />
  ) : (
    <RadioCircle active={isActive} />
  )

  return (
    <div
      className='Option'
      onClick={handleClick}
      css={[
        optionCSS,
        (theme) => css`
          color: ${isActive ? theme.textColor.primary : 'inherit'};
        `,
      ]}
      {...props}>
      {children}
      {!noCircle && circle}
    </div>
  )
}

Radio.Option = Option

export default Radio
