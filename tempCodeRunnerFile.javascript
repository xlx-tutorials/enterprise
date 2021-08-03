function a(options = ({ name = '321', age: '333' } = { name: '123' })) {
  console.log(options)
}

a({ age: '123' })
