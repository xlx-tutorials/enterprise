import { THEME } from 'constants/theme'

type CustomTheme = typeof THEME

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
