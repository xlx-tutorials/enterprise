import { Block } from 'components/Block'
import Checkbox from 'components/Checkbox'
import { FilterCheckBox, FilterLabel, FilterRow } from './styled'

function Filter() {
  return (
    <Block className='Filter'>
      <FilterRow>filter</FilterRow>
      <FilterRow>filter</FilterRow>
      <FilterRow>
        <FilterLabel>管理部门</FilterLabel>
        <FilterCheckBox>
          <Checkbox.Option value='apple'>Apple</Checkbox.Option>
        </FilterCheckBox>
      </FilterRow>
    </Block>
  )
}

export default Filter
