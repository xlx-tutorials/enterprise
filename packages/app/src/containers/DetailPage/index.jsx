import Logo from 'components/Logo'
import { Page } from 'components/Page'
import Header from 'containers/Header'
import { HeaderTitle } from 'containers/Header/components/styled'

// components prop
// render prop

function DetailPage() {
  return (
    <Page className='DetailPage'>
      <Header>
        <Logo />
        <HeaderTitle style={{ marginRight: 'auto' }}>资源库</HeaderTitle>
        {/* <Search />
        <SelectScopes />
        <HeaderAvatar /> */}
      </Header>
    </Page>
  )
}

export default DetailPage
