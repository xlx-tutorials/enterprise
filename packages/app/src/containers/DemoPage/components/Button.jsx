import { css } from '@emotion/react'

function Button({ children, as: As = 'button', ...props }) {
  return (
    <As
      type='button'
      css={css`
        user-select: none;
        cursor: pointer;

        &:hover {
          filter: opacity(0.6);
        }
      `}
      {...props}>
      {children}
    </As>
  )
}

export { Button }
