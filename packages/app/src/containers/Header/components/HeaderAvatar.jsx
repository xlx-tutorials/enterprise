import Image from 'components/Image'

function HeaderAvatar() {
  return (
    <Image
      size={80}
      src='https://picsum.photos/seed/8265/300/300'
      style={{ borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}
    />
  )
}

export default HeaderAvatar
