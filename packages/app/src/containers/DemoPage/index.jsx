import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Checkbox from 'components/Checkbox'
import { useCheckbox } from 'components/Checkbox/hooks'
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
  const { bind, value, setValue, clear } = useCheckbox()

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

      <div style={{ margin: 20 }}>
        <Checkbox {...bind()}>
          <Checkbox.Option value={{ name: 'apple' }}>Apple</Checkbox.Option>
          <Checkbox.Option value='banana'>Banana</Checkbox.Option>
        </Checkbox>

        <button type='button' onClick={clear}>
          Clear All
        </button>
      </div>
    </Page>
  )
}

export default DemoPage
