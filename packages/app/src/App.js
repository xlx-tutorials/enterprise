import GlobalCSS from 'components/GlobalCSS'
import Providers from 'containers/Providers'
import React, { useEffect } from 'react'
import Routes from 'Routes'

function App() {
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [])

  return (
    <Providers>
      <GlobalCSS />
      <Routes />
    </Providers>
  )
}

export default App
