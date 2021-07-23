import Providers from 'containers/Providers'
import React from 'react'
import Routes from 'Routes'
import GlobalComponents from './containers/GlobalComponents'

function App() {
  return (
    <Providers>
      <GlobalComponents />
      <Routes />
    </Providers>
  )
}

export default App
