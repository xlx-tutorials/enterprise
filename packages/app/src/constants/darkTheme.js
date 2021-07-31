const { PALETTE } = require('./palette')

const colors = {
  text: PALETTE.white.base,
  background: PALETTE.black.base,
  block: PALETTE.white[6],
  primary: PALETTE.primary,
  danger: PALETTE.red,
  black: PALETTE.white,
  white: PALETTE.black,
}

const textColor = {
  base: colors.text,
  gray: colors.black[80],
  primary: colors.primary,
  muted: colors.black[40],
  hint: colors.black[20],
}

const fontSize = {
  caption: '12px',
  body: '14px',
  headline: '16px',
  title: '18px',
}

const borders = {
  base: `1px solid ${colors.black[10]}`,
  button: `1px solid ${colors.black[20]}`,
}

const buttons = {
  primary: {
    textColor: PALETTE.white.base,
    background: PALETTE.primary,
  },
}

const DARK_THEME = {
  mode: 'dark',
  colors,
  textColor,
  fontSize,
  borders,
  buttons,
}

export { DARK_THEME }
