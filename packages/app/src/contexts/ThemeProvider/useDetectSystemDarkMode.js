import { useEffect, useRef, useState } from 'react'

function useDetectSystemDarkMode() {
  const matchMediaRef = useRef(
    window.matchMedia('(prefers-color-scheme: dark)')
  )
  const [isDark, setIsDark] = useState(matchMediaRef.current.matches)

  useEffect(() => {
    matchMediaRef.current.addEventListener('change', (ev) => {
      setIsDark(ev.matches)
    })

    return () =>
      window.removeEventListener('change', (ev) => {
        setIsDark(ev.matches)
      })
  }, [])

  return {
    isDark,
  }
}

// mounted() {
//   this.$ref.dom.addEventListener('change')
// }

// destroy() {
//   removeEventListener('change', {...})
// }

export { useDetectSystemDarkMode }
