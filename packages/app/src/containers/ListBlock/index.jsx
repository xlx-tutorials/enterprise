import { Link } from '@reach/router'
import { Block } from 'components/Block'
import React from 'react'
import ListItem from './components/ListItem'
import { SortButton, SortContainer, SortLabel } from './components/styled'
import { useFetchListData } from './hooks/useFetchListData'

function ListBlock() {
  const { data } = useFetchListData()

  return (
    <Block className='ListBlock'>
      <SortContainer>
        <SortLabel>
          共找到<strong>{data?.length}</strong>条结果
        </SortLabel>

        <SortButton>营业收入</SortButton>
        <SortButton>营业收入</SortButton>
        <SortButton>营业收入</SortButton>
        <SortButton>营业收入</SortButton>
        <SortButton>营业收入</SortButton>
        <SortButton>营业收入</SortButton>
      </SortContainer>

      {data?.map((item, i) => (
        <ListItem key={i.toString()} as={Link} to={`/${item.id}`} data={item} />
      ))}
    </Block>
  )
}

export default ListBlock
