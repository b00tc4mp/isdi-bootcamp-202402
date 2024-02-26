var Person = require('./Person')

console.log('TEST Person')

console.log('CASE constructor')
var p = new Person('Judit', 24)
console.assert(p.name === 'Judit', 'name is Judit')
console.assert(p.age === 24, 'age is 24')