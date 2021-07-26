import { Page } from 'components/Page'
import { Select } from 'components/Select'
/* 
  list: [
    {name: 'Apple', value: {,}}
  ]

  list: [
    {id: 'Apple'}
  ]
*/

function DemoPage() {
  // const [val, setVal] = useState()

  return (
    <Page
      className='DemoPage'
      style={{
        backgroundColor: 'white',
      }}>
      <Select defaultValue='apple' onChange={(val) => console.log(val)}>
        <Select.Option value='apple'>Apple</Select.Option>
        <Select.Option value='banana'>Banana</Select.Option>
      </Select>
    </Page>
  )
}

export default DemoPage
