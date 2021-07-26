import { css } from '@emotion/react'

function Button({ children, as: As = 'button', ...props }) {
  return (
    <As
      type='button'
      css={css`
        color: slateblue;
      `}
      onClick={() => alert(children)}
      {...props}>
      {children}
    </As>
  )
}

export { Button }
