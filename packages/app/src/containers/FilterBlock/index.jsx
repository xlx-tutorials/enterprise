import { Block } from 'components/Block'
import Radio from 'components/Radio'
import { useRadio } from 'components/Radio/hooks'
import { Button } from 'containers/DemoPage/components/Button'
import { useEffect, useState } from 'react'
import { FilterLabel, FilterRow } from './components/styled'

function FilterBlock() {
  const { bind: bindStreetsRadio, clear: clearStreetsRadio } = useRadio()
  const [streets, setStreets] = useState([])
  const { bind: bindIndustiesRadio, clear: clearIndustriesRadio } = useRadio()
  const [industies, setIndusties] = useState([])

  useEffect(function fetchData() {
    fetch('http://localhost:5000/streets')
      .then((res) => res.json())
      .then(setStreets)

    fetch('http://localhost:5000/industries')
      .then((res) => res.json())
      .then(setIndusties)
  }, [])

  return (
    <Block className='Filter'>
      <FilterRow>
        <FilterLabel>街道地区</FilterLabel>
        <Radio {...bindStreetsRadio()}>
          {streets.map((option) => (
            <Radio.Option key={option.id} value={option.name} noCircle>
              {option.name}
            </Radio.Option>
          ))}
        </Radio>
      </FilterRow>

      <FilterRow>
        <FilterLabel>行业分类</FilterLabel>
        <Radio {...bindIndustiesRadio()}>
          {industies.map((option) => (
            <Radio.Option key={option.id} value={option.name} noCircle>
              {option.name}
            </Radio.Option>
          ))}
        </Radio>
      </FilterRow>

      <FilterRow
        style={{
          padding: '12px 18px',
        }}>
        <Button
          style={{
            marginLeft: 'auto',
            color: 'orangered',
          }}
          onClick={() => {
            clearStreetsRadio()
            clearIndustriesRadio()
          }}>
          重置
        </Button>
      </FilterRow>
    </Block>
  )
}

export default FilterBlock
