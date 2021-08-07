import { globalHistory } from '@reach/router'
import { DARK_THEME } from 'constants/darkTheme'
import { THEME } from 'constants/theme'
import { ThemeProvider } from 'contexts/ThemeProvider'
import { useLocalStorage } from 'react-use'
import { QueryParamProvider } from 'use-query-params'
import EmotionThemeProvider from './EmotionThemeProvider'

function Providers({ children }) {
  const [mode] = useLocalStorage('themeMode', 'light')

  return (
    <QueryParamProvider reachHistory={globalHistory}>
      <ThemeProvider
        themes={{
          light: THEME,
          dark: DARK_THEME,
        }}
        defaultThemeKey={mode}
        defaultFollowSystem={!mode}>
        <EmotionThemeProvider>{children}</EmotionThemeProvider>
      </ThemeProvider>
    </QueryParamProvider>
  )
}

export default Providers
