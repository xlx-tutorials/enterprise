import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Page } from 'components/Page'
import { Select } from 'components/Select'
import { Button } from './components/Button'
/* 
  list: [
    {name: 'Apple', value: {,}}
  ]

  list: [
    {id: 'Apple'}
  ]
*/

const MyButton = styled.button`
  background: lavender;
  padding: 8px 12px;
  border-radius: 8px;
`

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

      <div>
        <Button as={MyButton} href='http://baidu.com'>
          Click Me
        </Button>
      </div>
    </Page>
  )
}

export default DemoPage
