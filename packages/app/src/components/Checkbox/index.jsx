import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useTheme } from 'contexts/ThemeProvider'
import { size } from 'polished'
import React from 'react'
import { RiCheckFill } from 'react-icons/ri'
import useAutoControlledState from '../../hooks/useAutoControlledState'

const OptionBox = styled.div`
  display: inline-flex;
  ${size(20)};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.black[6]};
  /* border: ${({ theme }) => theme.borders.button}; */
  margin-right: 10px;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.active && {
      backgroundColor: props.theme.colors.primary,
      color: props.theme.colors.white.base,
    }}
`

function Option({ active, children, ...props }) {
  const { theme } = useTheme()

  return (
    <div
      className='Option'
      css={css`
        display: inline-flex;
        align-items: center;
        user-select: none;
        cursor: pointer;

        .label {
          margin-right: 10px;
        }
      `}
      {...props}>
      <div className='label'>{children}</div>
      <OptionBox active={active}>
        {active && <RiCheckFill fontSize={14} />}
      </OptionBox>
    </div>
  )
}

function Checkbox({
  children,
  value,
  defaultValue,
  onChange = () => {},
  ...props
}) {
  const [checked, setChecked] = useAutoControlledState({
    value,
    defaultValue,
    onChange,
  })

  function handleClick(child) {
    const { value: optionValue } = child.props
    const isChecked = [checked].flat().find((item) => item === optionValue)

    // eslint-disable-next-line no-nested-ternary
    const newValue = isChecked
      ? [checked].flat().filter((item) => item !== optionValue)
      : [checked].flat().concat(optionValue)

    setChecked(newValue)
  }

  function isActive(child) {
    const { value: optionValue } = child.props
    return [checked].flat().some((item) => item === optionValue)
  }

  return (
    <div
      className='Checkbox'
      css={css`
        display: inline-flex;
      `}
      {...props}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          onClick: () => handleClick(child),
          active: isActive(child),
        })
      )}
    </div>
  )
}

Checkbox.Option = Option

export default Checkbox
