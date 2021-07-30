import { css } from '@emotion/react'
import styled from '@emotion/styled'

const FilterRow = styled.div(
  ({ theme }) => css`
    border-bottom: ${theme.borders.base};
    padding: 24px 18px;
    display: flex;
    align-items: center;

    &:last-of-type {
      border-bottom: none;
    }
  `
)

const FilterLabel = styled.label(
  ({ theme }) => css`
    color: ${theme.textColor.muted};
    min-width: 80px;
    display: inline-block;
  `
)

const FilterRadio = styled.div``

const FilterOption = styled.div``

export { FilterRow, FilterLabel, FilterRadio, FilterOption }
