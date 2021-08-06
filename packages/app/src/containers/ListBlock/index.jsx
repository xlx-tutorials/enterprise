import { Link } from '@reach/router'
import { Block } from 'components/Block'
import { useFetch } from 'hooks/useFetch'
import React from 'react'
import ListItem from './components/ListItem'
import { SortButton, SortContainer, SortLabel } from './components/styled'

function ListBlock() {
  const { data } = useFetch('/enterprises', { defaultData: [] })

  return (
    <Block className='ListBlock'>
      <SortContainer>
        <SortLabel>
          共找到<strong>1298</strong>条结果
        </SortLabel>

        <SortButton>营业收入</SortButton>
        <SortButton>营业收入</SortButton>
        <SortButton>营业收入</SortButton>
        <SortButton>营业收入</SortButton>
        <SortButton>营业收入</SortButton>
        <SortButton>营业收入</SortButton>
      </SortContainer>

      {data?.map((item) => (
        <ListItem key={item.id} as={Link} to={`/${item.id}`} data={item} />
      ))}
    </Block>
  )
}

export default ListBlock
