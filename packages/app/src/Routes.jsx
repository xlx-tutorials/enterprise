import { Router } from '@reach/router'
import HomePage from 'containers/HomePage'

function Routes() {
  return (
    <Router id='router'>
      <HomePage path='/' />
    </Router>
  )
}

export default Routes
