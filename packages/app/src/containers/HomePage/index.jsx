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

const fakeData = [
  {
    label: '快速筛选',
    radio: [
      {
        label: '筛选项名1',
        value: '筛选项名1',
      },
      {
        label: '筛选项名2',
        value: '筛选项名2',
      },
      {
        label: '筛选项名3',
        value: '筛选项名3',
      },
      {
        label: '筛选项名4',
        value: '筛选项名4',
      },
      {
        label: '筛选项名5',
        value: '筛选项名5',
      },
    ],
  },
  {
    label: '街道地区',
    radio: [
      {
        label: '街道1',
        value: '街道1',
      },
      {
        label: '街道2',
        value: '街道2',
      },
      {
        label: '街道3',
        value: '街道3',
      },
      {
        label: '街道4',
        value: '街道4',
      },
      {
        label: '街道5',
        value: '街道5',
      },
    ],
  },
  {
    label: '行业分类',
    radio: [
      {
        label: '行业分类1',
        value: '行业分类1',
      },
      {
        label: '行业分类2',
        value: '行业分类2',
      },
      {
        label: '行业分类3',
        value: '行业分类3',
      },
      {
        label: '行业分类4',
        value: '行业分类4',
      },
      {
        label: '行业分类5',
        value: '行业分类5',
      },
    ],
  },
]

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
