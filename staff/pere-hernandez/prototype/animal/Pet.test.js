const Animal = require('./Animal')
var Pet = require('./Pet')
var assert = require('./assert')
var Person = require('./Person')

var pet = new Pet(new Date(2017, 3, 5), 5.2, 0.27, 4, 'Repollo', new Person('Eufrasio', 'Papadopoulos', new Date(1953, 3, 3), 2.07, 54.5, 2, 'male', 'white', 'green', 'pink'),)

console.log('CASE constructor happy')

assert.instanceOf(pet, Animal)
assert.instanceOf(pet, Pet)

assert.assert(pet.name, 'Repollo')
assert.instanceOf(pet.owner, Person)



console.log('CASE constructor name unhappy not a string')

try {
    pet = new Pet (new Date(2017, 3, 5), 5.2, 0.27, 4, true, 'Eufrasio Papadopoulos')
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'TypeError', 'true is not a string')



console.log('CASE constructor owner unhappy not a Person')

try {
    pet = new Pet (new Date(2017, 3, 5), 5.2, 0.27,  4, 'Repollo', 800)
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'TypeError', '800 is not a Person')