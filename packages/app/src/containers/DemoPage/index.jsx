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
      <div style={{ padding: 40 }}>
        <Select
          list={['Apple', 'Banana', 'Orange']}
          defaultValue='Apple'
          onChange={(val) => console.log(val)}
        />

        <Select onChange={(val) => console.log(val)}>
          {/* <Option value='apple'>Apple</Option>
          <Option value='banana'>Banana</Option> */}
        </Select>
      </div>
    </Page>
  )
}

export default DemoPage
