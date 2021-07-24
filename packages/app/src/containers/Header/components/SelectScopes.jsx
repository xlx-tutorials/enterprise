import { css } from '@emotion/react'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'

function SelectScopes() {
  return (
    <div className='SelectScopes'>
      <button
        type='button'
        css={css`
          flex-shrink: 0;
          margin-right: 20px;
          display: flex;
          align-items: center;
        `}>
        查找范围
        {true ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
      </button>
    </div>
  )
}

export default SelectScopes
