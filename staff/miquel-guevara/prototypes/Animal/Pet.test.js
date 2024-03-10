var assert = require('./assert')

var Animal = require('./Animal')
var Pet = require('./Pet')
var Person = require('./Person')

console.log('TEST Pet')

console.log('CASE constructor')

var peter = new Person('Peter', 'Griffin', new Date(1984, 5, 31, 18, 45), 'EUA', 170, 110)
var ayra = new Pet(peter, 'Ayra', new Date(2009, 8, 3, 10, 30), 'CZ', 12)

assert.instanceOf(ayra, Pet)
assert.instanceOf(ayra, Animal)
assert.equalsValue(ayra.constructor, Pet)
assert.equalsValue(ayra.name, 'Ayra')
assert.instanceOf(ayra.birthdate, Date)
assert.equalsValue(ayra.birthdate.getFullYear(), 2009)
assert.equalsValue(ayra.birthdate.getMonth(), 8)
assert.equalsValue(ayra.birthdate.getDate(), 3)
assert.equalsValue(ayra.birthdate.getHours(), 10)
assert.equalsValue(ayra.birthdate.getMinutes(), 30)
assert.equalsValue(ayra.country, 'CZ')
assert.equalsValue(ayra.weight, 12)
assert.equalsValue(ayra.sleeping, false)
assert.equalsValue(ayra.eating, '')
assert.equalsValue(ayra.legsSpeed, 0)


console.log('CASE toString')

var peter = new Person('Peter', 'Griffin', new Date(1984, 5, 31, 18, 45), 'EUA', 170, 110)
var ayra = new Pet(peter, 'Ayra', new Date(2009, 8, 3, 10, 30), 'CZ', 12)

assert.equalsValue(ayra.toString(), 'Pet (Ayra, 2009-09-03, CZ)')

console.log('CASE constructor fails on non-Person owner')

var errorThrown

try {
    new Pet(undefined, peter, 'Ayra', new Date(2009, 8, 3, 10, 30), 'CZ', 12)
} catch (error) {
    errorThrown = error
}

assert.error(errorThrown, 'TypeError', 'owner is not a Person')