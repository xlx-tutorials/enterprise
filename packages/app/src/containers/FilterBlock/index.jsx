import { Block } from 'components/Block'
import Radio from 'components/Radio'
import { Button } from 'containers/DemoPage/components/Button'
import { useEffect, useState } from 'react'
import { FilterLabel, FilterRow } from './components/styled'
import { useFilterQuery } from './hooks/useFilterQuery'

function FilterBlock() {
  const [streetsData, setStreetsData] = useState([])

  const [industiesData, setIndustiesData] = useState([])

  const { query, setQuery, clear } = useFilterQuery()

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
        <Radio
          value={query.street}
          onChange={(street) =>
            setQuery({
              street,
            })
          }>
          {streetsData.map((option) => (
            <Radio.Option key={option.id} value={option.id} noCircle>
              {option.name}
            </Radio.Option>
          ))}
        </Radio>
      </FilterRow>

      <FilterRow>
        <FilterLabel>行业分类</FilterLabel>
        <Radio
          value={query.industry}
          onChange={(industry) => setQuery({ industry })}>
          {industiesData.map((option) => (
            <Radio.Option key={option.id} value={option.id} noCircle>
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
          onClick={clear}>
          重置
        </Button>
      </FilterRow>
    </Block>
  )
}

export default FilterBlock
