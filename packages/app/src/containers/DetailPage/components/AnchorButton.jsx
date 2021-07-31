import { Button } from 'containers/DemoPage/components/Button'

function AnchorButton({ children, onClick = () => {}, targetRef, ...props }) {
  function handleClick() {
    const dom = targetRef.current
    dom?.scrollIntoView({ behavior: 'smooth' })
    onClick()
  }

  return (
    <Button className='AnchorButton' onClick={handleClick} {...props}>
      {children}
    </Button>
  )
}

export default AnchorButton
