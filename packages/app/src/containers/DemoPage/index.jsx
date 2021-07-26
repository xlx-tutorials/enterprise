import { Demo } from 'components/Demo'
import { Page } from 'components/Page'
import Select from 'components/Select'
/* 
  list: [
    {name: 'Apple', value: {,}}
  ]

  list: [
    {id: 'Apple'}
  ]
*/

function DemoPage() {
  return (
    <Page
      className='DemoPage'
      style={{
        backgroundColor: 'white',
      }}>
      <Demo>demo</Demo>
    </Page>
  )
}

export default DemoPage
