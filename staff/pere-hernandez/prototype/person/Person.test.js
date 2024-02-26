var Person = require('./Person')

let person = new Person('Eufrasio', 'Papadopoulos', 2.07, 54.5, 73, 'male', 'pale', 'green', 'pink')

console.log('CASE constructor')

console.assert(person.name === 'Eufrasio')
console.assert(person.surname === 'Papadopoulos')
console.assert(person.height === 2.07)
console.assert(person.weight === 54.5)
console.assert(person.age === 73)
console.assert(person.sex === 'male')
console.assert(person.skinTone === 'pale')
console.assert(person.eyeColor === 'green')
console.assert(person.hairColor === 'pink')