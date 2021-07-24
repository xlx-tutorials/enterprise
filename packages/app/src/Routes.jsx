import { Router } from '@reach/router'
import DemoPage from 'containers/DemoPage'
import DetailPage from 'containers/DetailPage'
import HomePage from 'containers/HomePage'

function Routes() {
  return (
    <Router id='router'>
      <HomePage path='/' />
      <DetailPage path='/detail' />
      <DemoPage path='/demo' />
    </Router>
  )
}

export default Routes
