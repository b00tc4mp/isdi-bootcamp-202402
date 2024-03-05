const Animal = require('./Animal')
var Person = require('./Person')
var assert = require('./assert')

let person = new Person('Eufrasio', 'Papadopoulos', new Date(1953, 3, 3), 2.07, 54.5, 2, 'male', 'pale', 'green', 'pink')

console.log('CASE constructor')

assert.instanceOf(person, Person)
assert.instanceOf(person, Animal)

console.assert(person.name === 'Eufrasio')
console.assert(person.surname === 'Papadopoulos')
console.assert(person.sex === 'male')
console.assert(person.skinTone === 'pale')
console.assert(person.eyeColor === 'green')
console.assert(person.hairColor === 'pink')


console.log('CASE constructor unhappy name not a string')

var errorThrown
try {
    person = new Person(undefined, 'Papadopoulos', new Date(1953, 3, 3), 2.07, 54.5, 2, 'male', 'pale', 'green', 'pink')
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'TypeError', 'undefined is not a string')



console.log('CASE constructor unhappy surname not a string')

var errorThrown
try {
    person = new Person('Eufrasio', undefined, new Date(1953, 3, 3), 2.07, 54.5, 2, 'male', 'pale', 'green', 'pink')
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'TypeError', 'undefined is not a string')



console.log('CASE constructor unhappy sex not a string')

var errorThrown
try {
    person = new Person('Eufrasio', 'Papadopoulos', new Date(1953, 3, 3), 2.07, 54.5, 2, undefined, 'pale', 'green', 'pink')
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'TypeError', 'undefined is not a string')



console.log('CASE constructor unhappy skinTone not a string')

var errorThrown
try {
    person = new Person('Eufrasio', 'Papadopoulos', new Date(1953, 3, 3), 2.07, 54.5, 2, 'male', undefined, 'green', 'pink')
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'TypeError', 'undefined is not a string')



console.log('CASE constructor unhappy eyeColor not a string')

var errorThrown
try {
    person = new Person('Eufrasio', 'Papadopoulos', new Date(1953, 3, 3), 2.07, 54.5, 2, 'male', 'white', undefined, 'pink')
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'TypeError', 'undefined is not a string')



console.log('CASE constructor unhappy hairColor not a string')

var errorThrown
try {
    person = new Person('Eufrasio', 'Papadopoulos', new Date(1953, 3, 3), 2.07, 54.5, 2, 'male', 'white', 'green', undefined)
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'TypeError', 'undefined is not a string')



console.log('CASE speak() happy')

var str = 'I am talking now'
person.speak(str)
assert.assert(person.silent, false)
assert.assert(person.message, str)



console.log('CASE speak() unhappy string not a string')

var num = 123
try {
    person.speak(num)
} catch (error){
    assert.assert(error.name,'TypeError')
    console.assert(error.message, '123 is not a String')
}



console.log('CASE stopTalking()')

person.stopTalking()
console.assert(person.silent === true, 'is silent')
console.assert(person.message === '', 'no message')