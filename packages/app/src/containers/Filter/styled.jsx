import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Checkbox from 'components/Checkbox'

const FilterRow = styled.div(
  ({ theme }) => css`
    padding: 20px 18px;
    border-bottom: ${theme.borders.base};

    &:last-of-type {
      border-bottom: none;
    }
  `
)

const FilterLabel = styled.label(
  ({ theme }) => css`
    color: ${theme.textColor.muted};
    margin-right: 14px;
  `
)

const FilterCheckBox = styled(Checkbox)``

export { FilterRow, FilterLabel, FilterCheckBox }
