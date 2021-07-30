import { Article } from 'components/Article'
import Logo from 'components/Logo'
import { Page, PageTitle } from 'components/Page'
import ToggleTheme from 'components/ToggleTheme'
import FilterBlock from 'containers/FilterBlock'
import Header from 'containers/Header'
import Search from 'containers/Header/components/Search'
import SelectScopes from 'containers/Header/components/SelectScopes'
import { HeaderTitle } from 'containers/Header/components/styled'

// composition pattern

function HomePage() {
  // const { theme, toggleTheme } = useTheme()

  return (
    <Page className='HomePage'>
      <PageTitle>首页</PageTitle>

      <Header>
        <Logo />
        <HeaderTitle>资源库</HeaderTitle>
        <Search />
        <SelectScopes />
        <ToggleTheme />
      </Header>

      <Article style={{ marginTop: 20 }}>
        <FilterBlock />
      </Article>
    </Page>
  )
}

export default HomePage
