import React, { useContext, useRef, useState } from 'react'

export const ThemeContext = React.createContext()

function ThemeProvider({
  children,
  themes,
  defaultThemeKey = themes && Object.keys(themes)[0],
}) {
  if (themes === undefined) throw new Error('themes prop must be provided')

  const defaultTheme = themes[defaultThemeKey]
  const [theme, setTheme] = useState(defaultTheme)

  const value = {
    theme,
    themes,
    defaultThemeKey,
    setTheme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

/** @returns {{
 *  theme: import('constants/theme')['THEME']
    themes: {[key: string]: import('constants/theme')['THEME']}
    setTheme: any
    switchTheme: any
    toggleTheme: any
 * }} */
function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined)
    throw new Error('useTheme must be used within ThemeProvider.')

  const { theme, themes, setTheme, defaultThemeKey } = context

  const defaultIndex = Object.keys(themes).findIndex(
    (key) => key === defaultThemeKey
  )
  const indexRef = useRef(defaultIndex)

  // 根据key切换主题
  function switchTheme(key) {
    if (themes[key] === undefined)
      throw new Error(`Can not find themes[${key}].`)

    setTheme(themes[key])
  }

  // 循环切换主题
  function toggleTheme() {
    indexRef.current += 1
    if (indexRef.current > Object.keys(themes).length - 1) {
      indexRef.current = 0
    }

    const nextThemeKey = Object.entries(themes)[indexRef.current][0]
    switchTheme(nextThemeKey)
  }

  return {
    theme,
    themes,
    setTheme,
    switchTheme,
    toggleTheme,
  }
}

export { ThemeProvider, useTheme }
