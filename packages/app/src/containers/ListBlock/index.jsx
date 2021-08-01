import { Link } from '@reach/router'
import { Block } from 'components/Block'
import React from 'react'
import ListItem from './components/ListItem'
import { SortButton, SortContainer, SortLabel } from './components/styled'

function ListBlock() {
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

      <ListItem as={Link} to='/detail' />
      <ListItem as={Link} to='/detail' />
      <ListItem as={Link} to='/detail' />
      <ListItem as={Link} to='/detail' />
      <ListItem as={Link} to='/detail' />
      <ListItem as={Link} to='/detail' />
      <ListItem as={Link} to='/detail' />
    </Block>
  )
}

export default ListBlock
