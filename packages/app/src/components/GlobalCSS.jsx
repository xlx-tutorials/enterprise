import { css, Global } from '@emotion/react'
import { normalize } from 'polished'

const globalCSS = css`
  ${normalize()};

  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html,
  body,
  #root,
  #router,
  div[tabindex='-1'] {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  a,
  button {
    color: inherit;
    padding: 0;
    margin: 0;
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;
  }
`

function GlobalCSS() {
  return (
    <Global
      styles={[
        globalCSS,
        (theme) => ({
          body: {
            color: theme.textColor.base,
            backgroundColor: theme.colors.background,
            fontSize: theme.fontSize.body,
            transition: 'background-color .2s, color .2s',
          },
        }),
      ]}
    />
  )
}

export default GlobalCSS
