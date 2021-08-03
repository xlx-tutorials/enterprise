import { Block } from 'components/Block'
import Radio from 'components/Radio'
import { useRadioGroup } from 'components/Radio/hooks'
import { Button } from 'containers/DemoPage/components/Button'
import { useEffect, useState } from 'react'
import { FilterLabel, FilterRow } from './components/styled'

const fakeData = [
  {
    label: '快速筛选',
    radio: [
      {
        label: '筛选项名1',
        value: '筛选项名1',
      },
      {
        label: '筛选项名2',
        value: '筛选项名2',
      },
      {
        label: '筛选项名3',
        value: '筛选项名3',
      },
      {
        label: '筛选项名4',
        value: '筛选项名4',
      },
      {
        label: '筛选项名5',
        value: '筛选项名5',
      },
    ],
  },
  {
    label: '街道地区',
    radio: [
      {
        label: '街道1',
        value: '街道1',
      },
      {
        label: '街道2',
        value: '街道2',
      },
      {
        label: '街道3',
        value: '街道3',
      },
      {
        label: '街道4',
        value: '街道4',
      },
      {
        label: '街道5',
        value: '街道5',
      },
    ],
  },
  {
    label: '行业分类',
    radio: [
      {
        label: '行业分类1',
        value: '行业分类1',
      },
      {
        label: '行业分类2',
        value: '行业分类2',
      },
      {
        label: '行业分类3',
        value: '行业分类3',
      },
      {
        label: '行业分类4',
        value: '行业分类4',
      },
      {
        label: '行业分类5',
        value: '行业分类5',
      },
    ],
  },
]

function FilterBlock() {
  const { bind, groupValue, clear, recoverLastSelection } = useRadioGroup()

  const [streets, setStreets] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/streets')
      .then((res) => res.json())
      .then((data) => setStreets(data))
  }, [])

  return (
    <Block className='Filter'>
      <FilterRow>
        <FilterLabel>街道地区</FilterLabel>
        <Radio>
          {streets.map((option) => (
            <Radio.Option key={option.name} value={option.name} noCircle>
              {option.name}
            </Radio.Option>
          ))}
        </Radio>
      </FilterRow>
      {fakeData.map((item, i) => (
        <FilterRow key={item.label}>
          <FilterLabel>{item.label}</FilterLabel>
          <Radio {...bind(i)}>
            {item.radio.map((option) => (
              <Radio.Option key={option.value} value={option.value} noCircle>
                {option.label}
              </Radio.Option>
            ))}
          </Radio>
        </FilterRow>
      ))}
      <FilterRow
        style={{
          padding: '12px 18px',
        }}>
        <Button
          style={{
            marginLeft: 'auto',
          }}
          // eslint-disable-next-line no-unneeded-ternary
          onClick={recoverLastSelection ? recoverLastSelection : () => {}}>
          {recoverLastSelection ? '恢复' : ''}
        </Button>
        <Button
          style={{
            marginLeft: 20,
            color: 'orangered',
          }}
          onClick={clear}>
          重置
        </Button>
      </FilterRow>
    </Block>
  )
}

export default FilterBlock
