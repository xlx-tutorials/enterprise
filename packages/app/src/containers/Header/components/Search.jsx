import { css } from '@emotion/react'
import { useTheme } from 'contexts/ThemeProvider'

function Search({ ...props }) {
  const { theme } = useTheme()

  return (
    <div
      className='search'
      css={css`
        display: flex;
        align-items: center;
        margin-right: 20px;
        flex: 1;
        max-width: 600px;

        input {
          height: 40px;
          border: ${theme.borders.button};
          border-right: none;
          border-radius: 4px;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          padding: 0 12px;
          width: 260px;
          flex: 1;
        }

        button {
          flex-shrink: 0;
          background: ${theme.buttons.primary.background};
          color: ${theme.buttons.primary.textColor};
          height: 40px;
          padding: 0 18px;
          font-size: ${theme.fontSize.headline};
          border-radius: 4px;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      `}
      {...props}>
      <input type='text' />
      <button type='button'>搜一下</button>
    </div>
  )
}

export default Search
