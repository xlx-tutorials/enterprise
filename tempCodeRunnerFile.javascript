const a = {name: 1}

const b = [[a]].flat().find(item=>item===a)

console.log( b === a )