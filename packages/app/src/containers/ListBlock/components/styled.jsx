import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { center } from 'utils/cssExtends'

const SortContainer = styled.div`
  padding: 16px 20px;
  flex-wrap: wrap;
  ${center};
  justify-content: flex-start;
`

const SortLabel = styled.span(
  ({ theme }) => css`
    margin-right: 30px;
    strong {
      color: ${theme.colors.danger};
    }
  `
)

const SortButton = styled.button(
  ({ theme }) => css`
    padding: 8px 16px;
    border: ${theme.borders.button};
    background-color: ${theme.colors.white.base};
    margin-right: 20px;
    border-radius: 2px;
    flex-shrink: 0;
  `
)

export { SortContainer, SortLabel, SortButton }
