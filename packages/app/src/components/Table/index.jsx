import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Table = styled.div(
  ({ theme, cols = 1 }) => css`
    /* display: grid;
    grid-template-columns: repeat(${cols}, 1fr);
    border-bottom: ${theme.borders.base};
    border-right: ${theme.borders.base}; */
    border: ${theme.borders.base};
  `
)

const TableRow = styled.div(
  ({ theme, cols = 1 }) => css`
    display: grid;
    grid-template-columns: repeat(${cols}, 1fr);
    border-bottom: ${theme.borders.base};

    &:last-of-type {
      border-bottom: none;
    }
  `
)

const TableItem = styled.div(
  ({ theme, colSpan = 1 }) => css`
    padding: 15px;
    display: flex;
    align-items: center;
    border-right: ${theme.borders.base};
    grid-column: span ${colSpan};

    &:last-of-type {
      border-right: none;
    }
  `
)

export { Table, TableItem, TableRow }
