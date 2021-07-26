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
      <Select defaultValue='apple' onChange={(value) => console.log(value)}>
        <Select.Input css />

        <Select.Options>
          <Select.Option value='apple'>Apple</Select.Option>
          <Select.Option value='banana'>
            <span>Banana</span>
          </Select.Option>
        </Select.Options>
      </Select>
    </Page>
  )
}

export default DemoPage
