import globalComponents from '../../globalComponents'

function GlobalComponents() {
  return globalComponents.map((comp) => comp())
}

export default GlobalComponents
