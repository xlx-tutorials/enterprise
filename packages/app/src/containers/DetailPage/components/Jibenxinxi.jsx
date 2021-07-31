import { useRef } from 'react'

const { default: AnchorButton } = require('./AnchorButton')

function Jibenxinxi() {
  const ref = useRef()

  return (
    <div className='Jibenxinxi'>
      <div className='chips'>
        <AnchorButton targetRef={ref}>content2</AnchorButton>
      </div>

      <div className='content'>
        <div
          ref={ref}
          style={{
            height: 2000,
          }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          repudiandae vero officia sit. Perspiciatis deleniti maxime rerum magni
          praesentium blanditiis modi. Aut fugit ipsum modi alias culpa impedit
          asperiores provident.
        </div>

        <div className='content2'>content2</div>
      </div>
    </div>
  )
}

export default Jibenxinxi
