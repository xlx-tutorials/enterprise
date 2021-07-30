import { Block } from 'components/Block'
import Radio from 'components/Radio'
import { useRadioGroup } from 'components/Radio/hooks'
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
]

function FilterBlock() {
  const { bind, groupValue } = useRadioGroup()

  console.log(groupValue)

  return (
    <Block className='Filter'>
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
    </Block>
  )
}

export default FilterBlock
