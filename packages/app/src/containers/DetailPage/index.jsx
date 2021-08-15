import { Article } from 'components/Article'
import { Block } from 'components/Block'
import Logo from 'components/Logo'
import { Page, PageTitle } from 'components/Page'
import ToggleTheme from 'components/ToggleTheme'
import { Tab, Tabs } from 'containers/DemoPage/components/Tabs'
import Header from 'containers/Header'
import Search from 'containers/Header/components/Search'
import SelectScopes from 'containers/Header/components/SelectScopes'
import { HeaderTitle } from 'containers/Header/components/styled'
import ListItem from 'containers/ListBlock/components/ListItem'
import { useFetchItemData } from './hooks/useFetchItemData'

function DetailPage({ children, id }) {
  const { data } = useFetchItemData(id)

  return (
    <Page className='DetailPage' style={{ paddingBottom: '20vh' }}>
      <PageTitle>详情页</PageTitle>

      <Header style={{ marginBottom: 20 }}>
        <Logo />
        <HeaderTitle>资源库</HeaderTitle>
        <Search />
        <SelectScopes />
        <ToggleTheme />
      </Header>

      <Article style={{ marginBottom: 20 }}>
        <Block className='info'>
          <ListItem data={data} />
        </Block>
      </Article>

      <Article>
        <Block>
          <Tabs>
            <Tab to='jibenxinxi'>基本信息</Tab>
            <Tab to='caiwuqingkuang'>财务情况</Tab>
          </Tabs>
          {children}
        </Block>
      </Article>
    </Page>
  )
}

export default DetailPage
