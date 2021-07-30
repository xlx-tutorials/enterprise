import styled from '@emotion/styled'
import { useEffect } from 'react'

const Page = styled.main``

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
