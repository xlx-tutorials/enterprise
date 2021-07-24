import { css } from '@emotion/react'
import { useTheme } from 'contexts/ThemeProvider'
import { useRef, useState } from 'react'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import { useClickAway } from 'react-use'

function Select({
  list = [],
  defaultValue,
  defaultOpen = false,
  onChange = () => {},
}) {
  const { theme } = useTheme()

  const [selectedValue, setSelectedValue] = useState(defaultValue)

  const [open, setOpen] = useState(defaultOpen)

  const domRef = useRef()

  function handleClickOpen() {
    setOpen(!open)
  }

  function handleClickItem(item) {
    setSelectedValue(item)
    onChange(item)
  }

  useClickAway(domRef, function clickAwayToClose() {
    setOpen(false)
  })

  return (
    <div
      className='Select'
      css={css`
        display: inline-flex;
        flex-direction: column;
        user-select: none;

        .selected {
          background: ${theme.colors.black[6]};
          display: inline-flex;
          padding: 12px 20px;
          border: ${theme.borders.button};
          border-radius: 4px;
          width: 100px;
          align-items: center;
          cursor: pointer;

          span {
            margin-left: auto;
            display: flex;
            align-items: center;
          }

          &:hover {
            border: 1px solid ${theme.colors.primary};
            background: ${theme.colors.white.base};
            color: ${theme.textColor.primary};
          }
        }

        ul,
        li {
          margin: 0;
          list-style: none;
        }

        .list {
          background: ${theme.colors.black[6]};
          border: ${theme.borders.button};
          border-radius: 4px;
          padding: 12px;
          margin-top: 8px;

          li {
            padding: 8px 0;
            cursor: pointer;

            &:hover {
              color: ${theme.textColor.primary};
            }
          }
        }
      `}
      ref={domRef}>
      <div className='selected' onClick={handleClickOpen}>
        {selectedValue}
        <span>{open ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}</span>
      </div>
      {open && (
        <ul className='list'>
          {list.map((item) => (
            <li key={item} onClick={() => handleClickItem(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Select
