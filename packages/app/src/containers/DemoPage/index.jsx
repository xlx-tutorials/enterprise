import styled from '@emotion/styled'
import { Block } from 'components/Block'
import Checkbox from 'components/Checkbox'
import { useCheckbox } from 'components/Checkbox/hooks'
import Modal from 'components/Modal'
import { useModal } from 'components/Modal/hooks'
import { ModalContent } from 'components/Modal/styled'
import { Page } from 'components/Page'
import Radio from 'components/Radio'
import { useRadioGroup } from 'components/Radio/hooks'
import { Select } from 'components/Select'
import Toast from 'components/Toast'
import { useToast } from 'components/Toast/hooks'
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
  const { bind: bindToast } = useToast()

  const { bind: binRadioGroup, groupValue: radioGroupValue } = useRadioGroup()

  const { bind: bindModal, toggle, open } = useModal()

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
          <Checkbox.Option value='apple'>Apple</Checkbox.Option>
          <Checkbox.Option value='banana'>Banana</Checkbox.Option>
        </Checkbox>

        <button type='button' onClick={clear}>
          Clear All
        </button>
      </div>

      <Toast {...bindToast()}>Something wrong...</Toast>
      <button type='button' onClick={() => Toast.show()}>
        Show Toast
      </button>
      {/* <button type='button' onClick={() => Toast.show()}>
        Close Immediately
      </button> */}

      <Block>
        <Radio {...binRadioGroup(0)}>
          <Radio.Option value='apple'>Apple</Radio.Option>
          <Radio.Option value='banana'>Banana</Radio.Option>
        </Radio>
        <Radio {...binRadioGroup(1)}>
          <Radio.Option value='apple'>Apple</Radio.Option>
          <Radio.Option value='banana'>Banana</Radio.Option>
        </Radio>
        <Radio {...binRadioGroup(2)}>
          <Radio.Option value='apple'>Apple</Radio.Option>
          <Radio.Option value='banana'>Banana</Radio.Option>
        </Radio>
      </Block>

      <Block
        className='modal'
        style={{
          height: 2000,
        }}>
        <button type='button' onClick={toggle}>
          Show modal
        </button>

        <Modal {...bindModal()}>
          <ModalContent>hello</ModalContent>
        </Modal>
      </Block>
    </Page>
  )
}

export default DemoPage
