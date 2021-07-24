import styled from '@emotion/styled'
import { useEffect } from 'react'

const Page = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`

function PageTitle({ children }) {
  if (!(typeof children === 'string')) {
    throw new Error(`${children} is not a string.`)
  }

  useEffect(
    function setTitle() {
      document.title = children
    },
    [children]
  )

  return null
}

export { PageTitle, Page }
