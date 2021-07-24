import Page from 'components/Page'
import Header from 'containers/Header'

// composition pattern

function HomePage() {
  // const { theme, toggleTheme } = useTheme()

  return (
    <Page className='HomePage'>
      <Header />
    </Page>
  )
}

export default HomePage
