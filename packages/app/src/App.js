import GlobalCSS from 'components/GlobalCSS'
import Providers from 'containers/Providers'
import React from 'react'
import Routes from 'Routes'

function App() {
  return (
    <Providers>
      <GlobalCSS />
      <Routes />
    </Providers>
  )
}

export default App
