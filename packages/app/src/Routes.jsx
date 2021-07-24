import { Router } from '@reach/router'
import DetailPage from 'containers/DetailPage'
import HomePage from 'containers/HomePage'

function Routes() {
  return (
    <Router id='router'>
      <HomePage path='/' />
      <DetailPage path='/detail' />
    </Router>
  )
}

export default Routes
