function a() {
  // console.log( 'a' )
}

function b() {
  console.log('b')
}

const run = () => (console.log('a'), b)

console.log(run())
