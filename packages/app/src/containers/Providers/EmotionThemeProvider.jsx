import { ThemeProvider } from '@emotion/react'
import { useTheme } from 'contexts/ThemeProvider'

function EmotionThemeProvider({ children }) {
  const { theme } = useTheme()

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default EmotionThemeProvider
