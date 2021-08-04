/* 
  <button></button>
  <Collpase hide>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quia dignissimos cumque mollitia, quisquam quod! Asperiores, deserunt repudiandae soluta, dolores iure, pariatur deleniti velit placeat obcaecati autem corrupti sequi odio.</p>
  </Collpase>
*/

import React, { useState } from 'react'

function Collapse({ children, hide = false, ...props }) {
  const [height, setHeight] = useState(0)

  return (
    <div
      className='Collapse'
      style={{
        maxHeight: hide ? 0 : height,
        transition: '.4s',
        overflow: 'hidden',
      }}
      {...props}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          ref: (e) => e && setHeight(e.offsetHeight),
        })
      )}
    </div>
  )
}

export default Collapse
