var assert = require('./assert')

var Animal = require('./Animal')

console.log('TEST Animal')

console.log('CASE constructor')

var animal = new Animal('Artico', 'mammal', 12, 4, 450)

assert.equalsValue(animal.country, 'Artico')
assert.equalsValue(animal.vertrebate, 'mammal')
assert.equalsValue(animal.age, 12)
assert.equalsValue(animal.legs, 4)
assert.equalsValue(animal.weight, 450)


