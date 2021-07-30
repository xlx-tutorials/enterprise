import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { size } from 'polished'

const RadioCircle = styled.span(
  ({ theme, active }) => css`
    ${size(14)}
    display: inline-flex;
    flex-shrink: 0;
    background-color: ${theme.colors.white.base};
    border-radius: 50%;
    margin-left: 4px;
    border: ${theme.borders.base};
    ${active
      ? {
          backgroundColor: theme.colors.primary,
          boxShadow: `0 0 0 2px ${theme.colors.white.base} inset`,
        }
      : null}
  `
)

export { RadioCircle }
