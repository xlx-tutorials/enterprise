import { rgba } from 'polished'

const PALETTE = {
  primary: '#1175ED',
  red: '#FF3B30',
  lightgray: '#f6f6f6',
  get black() {
    const base = '#333333'
    return {
      base,
      90: rgba(base, 0.9),
      80: rgba(base, 0.8),
      70: rgba(base, 0.7),
      60: rgba(base, 0.6),
      50: rgba(base, 0.5),
      40: rgba(base, 0.4),
      30: rgba(base, 0.3),
      20: rgba(base, 0.2),
      10: rgba(base, 0.1),
      6: rgba(base, 0.06),
    }
  },
  get white() {
    const base = '#FFFFFF'
    return {
      base,
      90: rgba(base, 0.9),
      80: rgba(base, 0.8),
      70: rgba(base, 0.7),
      60: rgba(base, 0.6),
      50: rgba(base, 0.5),
      40: rgba(base, 0.4),
      30: rgba(base, 0.3),
      20: rgba(base, 0.2),
      10: rgba(base, 0.1),
      6: rgba(base, 0.06),
    }
  },
}

export { PALETTE }
