import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { cover } from 'polished'

const ModalContainer = styled.div`
  ${cover()}
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalBackground = styled.div(
  ({ theme }) => css`
    ${cover()}
    background: ${theme.colors.black[80]};
    cursor: pointer;
    user-select: none;
  `
)

const ModalContent = styled.div(
  ({ theme }) => css`
    position: relative;
    background: ${theme.colors.block};
    padding: 20px;
    border-radius: 4px;
    min-width: 300px;
    min-height: 200px;
  `
)

export { ModalContainer, ModalBackground, ModalContent }
