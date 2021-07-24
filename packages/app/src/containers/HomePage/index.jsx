import Logo from 'components/Logo'
import { Page } from 'components/Page'
import { HeaderTitle } from 'containers/Header/components/styled'
import Header from 'containers/Header'
import HeaderAvatar from 'containers/Header/components/HeaderAvatar'
import Search from 'containers/Header/components/Search'
import SelectScopes from 'containers/Header/components/SelectScopes'

// composition pattern

function HomePage() {
  // const { theme, toggleTheme } = useTheme()

  return (
    <Page className='HomePage'>
      <Header>
        <Logo />
        <HeaderTitle>资源库</HeaderTitle>
        <Search />
        <SelectScopes />
        <HeaderAvatar />
      </Header>
    </Page>
  )
}

export default HomePage
