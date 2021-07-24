import { css } from '@emotion/react'
import { size as pSize } from 'polished'

function Image({ src, alt, size, width, height, fit = 'cover', ...props }) {
  return (
    <div
      className='Image'
      css={css`
        display: inline-flex;
        ${size ? pSize(size) : undefined}
        ${width && {
          width,
        }}
        ${height && {
          height,
        }}
      `}
      {...props}>
      <img
        src={src}
        alt={alt}
        css={css`
          width: 100%;
          height: 100%;
          object-fit: ${fit};
        `}
      />
    </div>
  )
}

export default Image
