var Person = require('./Person')

console.log('TEST Person')

console.log('CASE constructor')
var p = new Person('Pepito', 39)
console.assert(p.name === 'Pepito', 'name is Pepito')
console.assert(p.age === 39, 'age is 39')

p.wakeUp()
console.assert(p.status === 'awake', 'status should be awake')

p.walk('store')

p.sleep()
console.assert(p.status === 'asleep', 'status should be asleep')