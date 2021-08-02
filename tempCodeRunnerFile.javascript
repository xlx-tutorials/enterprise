a = {
  style: {
    color: 'red'
  }
}

console.log(
  Object.assign(a, {
    style: {
      background: 'blue'
    }
  })
)

console.log( a )
