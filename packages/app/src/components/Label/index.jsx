import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { rgba } from 'polished'
import { row } from 'utils/cssExtends'

const Label = styled.label(
  ({ theme }) => css`
    padding: 4px 14px;
    border-radius: 2px;
    background: ${rgba(theme.colors.primary, 0.1)};
    color: ${rgba(theme.colors.primary, 0.8)};
    flex-shrink: 0;
  `
)

const Labels = styled.div`
  ${row};
  flex-wrap: wrap;
  ${Label} {
    margin-right: 10px;
    &:last-of-type {
      margin-right: none;
    }
  }
`

export { Label, Labels }
