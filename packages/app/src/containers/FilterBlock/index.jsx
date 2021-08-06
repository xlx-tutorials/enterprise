import { Block } from 'components/Block'
import Radio from 'components/Radio'
import { useRadio } from 'components/Radio/hooks'
import { Button } from 'containers/DemoPage/components/Button'
import { useEffect, useState } from 'react'
import { FilterLabel, FilterRow } from './components/styled'

function FilterBlock() {
  const { bind: bindStreetsRadio, clear: clearStreetsRadio } = useRadio()
  const [streetsData, setStreetsData] = useState([])
  const { bind: bindIndustiesRadio, clear: clearIndustriesRadio } = useRadio()
  const [industiesData, setIndustiesData] = useState([])

  useEffect(function fetchData() {
    fetch('http://localhost:5000/streets')
      .then((res) => res.json())
      .then(setStreetsData)

    fetch('http://localhost:5000/industries')
      .then((res) => res.json())
      .then(setIndustiesData)
  }, [])

  return (
    <Block className='Filter'>
      <FilterRow>
        <FilterLabel>街道地区</FilterLabel>
        <Radio {...bindStreetsRadio()}>
          {streetsData.map((option) => (
            <Radio.Option key={option.id} value={option.name} noCircle>
              {option.name}
            </Radio.Option>
          ))}
        </Radio>
      </FilterRow>

      <FilterRow>
        <FilterLabel>行业分类</FilterLabel>
        <Radio {...bindIndustiesRadio()}>
          {industiesData.map((option) => (
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
