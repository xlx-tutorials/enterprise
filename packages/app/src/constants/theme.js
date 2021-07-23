const { PALETTE } = require('./palette')

const colors = {
  text: PALETTE.black.base,
  background: PALETTE.lightgray,
  block: PALETTE.white.base,
  primary: PALETTE.primary,
  danger: PALETTE.red,
  black: PALETTE.black,
  white: PALETTE.white,
}

const textColor = {
  base: colors.text,
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

const THEME = {
  colors,
  textColor,
  fontSize,
  borders,
}

export { THEME }
