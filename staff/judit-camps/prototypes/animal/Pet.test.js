var Animal = require('./Animal')
var Person = require('./Person')
var Pet = require('./Pet')

var assert = require('./assert')

var person = new Person('Judit', new Date(1999, 12, 27), 50, 'F')
var pet = new Pet(person, 'T', new Date(2017, 6, 4), 15, 'F')

console.log('TEST: Pet')
console.log('constructor')
assert.instanceOf(pet, Pet)
assert.equalValue(pet.constructor, Pet)
assert.instanceOf(pet, Animal)