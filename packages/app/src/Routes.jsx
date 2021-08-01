import { Redirect, Router, globalHistory } from '@reach/router'
import DemoPage from 'containers/DemoPage'
import Caiwuqingkuang from 'containers/DemoPage/components/Caiwuqingkuang'
import DetailPage from 'containers/DetailPage'
import Jibenxinxi from 'containers/DetailPage/components/Jibenxinxi'
import HomePage from 'containers/HomePage'

globalHistory.listen(({ action }) => {
  if (action === 'PUSH') {
    window.scrollTo(0, 0)
  }
})

function Routes() {
  return (
    <Router id='router' primary={false}>
      <HomePage path='/' />
      <DetailPage path='/detail'>
        <Jibenxinxi path='jibenxinxi' />
        <Caiwuqingkuang path='caiwuqingkuang' />
        <Redirect from='/' to='jibenxinxi' noThrow />
      </DetailPage>
      <DemoPage path='/demo' />
    </Router>
  )
}

export default Routes
