import { css } from '@emotion/react'
import { Block } from 'components/Block'
import { themeCSS } from 'utils/themeCSS'

const headerCSS = themeCSS(
  (theme) => css`
    flex-direction: row;
    align-items: center;
    height: 120px;
    border: none;
    border-bottom: ${theme.borders.base};
  `
)

function Header({ children, ...props }) {
  return (
    <Block className='Header' css={headerCSS} {...props}>
      <div
        className='wrapper'
        css={css`
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 1200px;
          margin: 0 auto;
          flex-wrap: wrap;
        `}>
        {children}
      </div>
    </Block>
  )
}

export default Header
