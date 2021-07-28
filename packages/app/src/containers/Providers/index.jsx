import { DARK_THEME } from 'constants/darkTheme'
import { THEME } from 'constants/theme'
import { ThemeProvider } from 'contexts/ThemeProvider'
import { useLocalStorage } from 'react-use'
import EmotionThemeProvider from './EmotionThemeProvider'

function Providers({ children }) {
  const [mode] = useLocalStorage('themeMode', 'light')

  return (
    <ThemeProvider
      themes={{
        light: THEME,
        dark: DARK_THEME,
      }}
      defaultThemeKey={mode}
      defaultFollowSystem={!mode}>
      <EmotionThemeProvider>{children}</EmotionThemeProvider>
    </ThemeProvider>
  )
}

export default Providers
