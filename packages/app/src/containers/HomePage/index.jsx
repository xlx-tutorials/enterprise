import { css } from '@emotion/react'
import { Article } from 'components/Article'
import Logo from 'components/Logo'
import { Page, PageTitle } from 'components/Page'
import ToggleTheme from 'components/ToggleTheme'
import FilterBlock from 'containers/FilterBlock'
import Header from 'containers/Header'
import Search from 'containers/Header/components/Search'
import SelectScopes from 'containers/Header/components/SelectScopes'
import { HeaderTitle } from 'containers/Header/components/styled'
import ListBlock from 'containers/ListBlock'

function HomePage() {
  return (
    <Page className='HomePage' style={{ paddingBottom: '20vh' }}>
      <PageTitle>首页</PageTitle>

      <Header style={{ marginBottom: 20 }}>
        <Logo />
        <HeaderTitle>资源库</HeaderTitle>
        <Search />
        <SelectScopes />
        <ToggleTheme />
      </Header>

      <Article style={{ marginBottom: 20 }}>
        <FilterBlock />
      </Article>

      <Article>
        <ListBlock />
      </Article>
    </Page>
  )
}

export default HomePage
