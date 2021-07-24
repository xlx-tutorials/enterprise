import { css } from '@emotion/react'
import { Block } from 'components/Block'
import Image from 'components/Image'
import SvgLogo from 'components/Svgs/SvgLogo'
import { useTheme } from 'contexts/ThemeProvider'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import SelectScopes from './components/SelectScopes'

const headerCSS = css`
  flex-direction: row;
  align-items: center;
  height: 120px;
`

function Header({ renderLogo }) {
  const { theme } = useTheme()

  const RenderLogo =
    renderLogo && typeof renderLogo === 'function'
      ? renderLogo
      : () => renderLogo

  return (
    <Block className='Header' css={headerCSS}>
      <div
        className='wrapper'
        css={css`
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 1200px;
          margin: 0 auto;
        `}>
        {renderLogo ? (
          <RenderLogo />
        ) : (
          <SvgLogo size={50} style={{ marginRight: 20 }} />
        )}

        <div
          css={css`
            padding: 12px 40px;
            background: ${theme.colors.primary};
            color: ${theme.colors.white.base};
            flex-shrink: 0;
            border-radius: 2px;
            margin-right: 20px;
            font-size: ${theme.fontSize.headline};
          `}>
          资源库
        </div>

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
              background: ${theme.colors.primary};
              color: ${theme.colors.white.base};
              height: 40px;
              padding: 0 18px;
              font-size: ${theme.fontSize.headline};
              border-radius: 4px;
              border-top-left-radius: 0;
              border-bottom-left-radius: 0;
            }
          `}>
          <input type='text' />
          <button type='button'>搜一下</button>
        </div>

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

        <SelectScopes />

        <Image
          size={80}
          src='https://picsum.photos/seed/8265/300/300'
          style={{ borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}
        />
      </div>
    </Block>
  )
}

export default Header
