import globalComponents from '../../globalComponents'

function GlobalComponents() {
  // eslint-disable-next-line react/no-array-index-key
  return globalComponents.map((Comp, key) => <Comp key={key} />)
}

export default GlobalComponents
