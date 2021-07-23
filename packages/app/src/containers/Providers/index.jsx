import { DARK_THEME } from 'constants/darkTheme'
import { THEME } from 'constants/theme'
import { ThemeProvider } from 'contexts/ThemeProvider'
import EmotionThemeProvider from './EmotionThemeProvider'

function Providers({ children }) {
  return (
    <ThemeProvider
      themes={{
        theme: THEME,
        darkTheme: DARK_THEME,
      }}>
      <EmotionThemeProvider>{children}</EmotionThemeProvider>
    </ThemeProvider>
  )
}

export default Providers
