var Dog = require('./Dog')
var Pet = require('./Pet')
var Animal = require('./Animal')
var assert = require('./assert')
const Person = require('./Person')

var dog = new Dog(new Date(2019, 0, 5), 36, 0.75, 4, 'Aura', new Person('Dolores', 'Fuertes', new Date (1995, 7, 11), 1.65, 62, 2, 'female', 'tanned', 'brown', 'black'), 'golden retriever')



console.log('CASE constructor happy')

assert.instanceOf(dog, Dog)
assert.instanceOf(dog, Pet)
assert.instanceOf(dog, Animal)

assert.assert(dog.breed, 'golden retriever')



console.log('CASE constructor unhappy breed not a string')

var errorThrown
try{
    dog = new Dog(new Date(2019, 0, 5), 36, 0.75, 4, 'Aura', new Person('Dolores', 'Fuertes', new Date (1995, 7, 11), 1.65, 62, 2, 'female', 'tanned', 'brown', 'black'), 7)
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'TypeError', '7 is not a string')



console.log('CASE bark() happy')

dog.bark()
assert.assert(dog.message, 'Woof, woof')
assert.assert(dog.silent, false)



console.log('CASE bark() unhappy on alive false')

dog.die()
try {
    dog.bark()
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'Error', 'tries to bark on alive false')



console.log('CASE bark() unhappy on awake false')

dog.alive = true
dog.sleep()
try {
    dog.bark()
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'Error', 'tries to bark on awake false')




console.log('CASE showChancla() happy')

dog.wakeUp()
dog.showChancla()
assert.assert(dog.silent, true)
assert.assert(dog.message, '')



console.log('CASE showChancla() unhappy on alive false')

dog.die()
try {
    dog.showChancla()
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'Error', 'tries to showChancla on alive false')



console.log('CASE showChancla() unhappy on awake false')

dog.alive = true
dog.sleep()
try {
    dog.showChancla()
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'Error', 'tries to showChancla on awake false')