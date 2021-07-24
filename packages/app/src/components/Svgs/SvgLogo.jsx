import * as React from 'react'

function SvgLogo({ size, ...props }) {
  return (
    <svg
      className='prefix__icon'
      viewBox='0 0 1024 1024'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      {...props}>
      <path
        d='M81.101 525.26a419.482 419.482 0 10838.963 0 419.482 419.482 0 10-838.963 0z'
        fill='#4058E2'
      />
      <path
        d='M127.846 516.557a372.736 364.032 0 10745.472 0 372.736 364.032 0 10-745.472 0z'
        fill='#5565E9'
      />
      <path
        d='M167.168 504.064a333.414 313.14 0 10666.829 0 333.414 313.14 0 10-666.829 0z'
        fill='#6675FE'
      />
      <path
        d='M214.477 494.643a286.106 259.277 0 10572.211 0 286.106 259.277 0 10-572.211 0z'
        fill='#7084FC'
      />
      <path
        d='M500.582 105.78c-23.398 0-46.284 1.996-68.608 5.682v430.541c0 28.672 23.245 51.866 51.866 51.866h430.54a421.018 421.018 0 005.684-68.608c0-231.68-187.802-419.482-419.482-419.482z'
        fill='#4058E2'
      />
      <path
        d='M956.109 506.112C933.274 275.763 750.13 92.57 519.782 69.786c-26.112-2.612-48.64 18.278-48.64 44.492v395.776c0 24.679 20.02 44.698 44.698 44.698h395.776c26.214 0 47.053-22.528 44.493-48.64z'
        fill='#EA9D03'
      />
      <path
        d='M919.91 477.133C900.506 281.19 744.704 125.389 548.762 105.984c-22.221-2.202-41.37 15.565-41.37 37.888v336.64c0 20.992 16.998 37.99 37.99 37.99h336.64c22.324 0 40.039-19.148 37.888-41.37z'
        fill='#F7BC00'
      />
      <path
        d='M882.944 441.446c-15.923-157.593-143.82-282.93-304.64-298.547-18.227-1.792-33.946 12.493-33.946 30.464V444.16c0 16.896 13.978 30.566 31.181 30.566h276.327c18.33 0 32.87-15.41 31.078-33.28z'
        fill='#F7CA44'
      />
      <path
        d='M842.445 409.702C830.31 289.843 733.03 194.51 610.714 182.63c-13.876-1.33-25.805 9.524-25.805 23.194v205.978c0 12.85 10.598 23.244 23.705 23.244H818.79c13.927-.05 25.037-11.776 23.655-25.344z'
        fill='#FFE98A'
      />
    </svg>
  )
}

export default SvgLogo
