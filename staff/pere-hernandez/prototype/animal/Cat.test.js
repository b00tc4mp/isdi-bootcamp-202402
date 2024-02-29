var Cat = require('./Cat')
var Pet = require('./Pet')
var Animal = require('./Animal')
var assert = require('./assert')
const Person = require('./Person')


let cat = new Cat(new Date(2014, 1, 28), 4, 0.2, 4, 'Garfield', new Person('Jon', 'Arbuckle', new Date(1978, 3, 3), 1.78, 72, 2, 'male', 'white', 'brown', 'brown'), 'unspecified')



console.log('CASE constructor happy')

assert.instanceOf(cat, Cat)
assert.instanceOf(cat, Pet)
assert.instanceOf(cat, Animal)

assert.assert(cat.breed, 'unspecified')



console.log('CASE constructor unhappy breed not a string')

var errorThrown
try{
    cat = new Cat(new Date(2014, 1, 28), 4, 0.2, 4, 'Garfield', new Person('Jon', 'Arbuckle', new Date(1978, 3, 3), 1.78, 72, 2, 'male', 'white', 'brown', 'brown'), undefined)
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'TypeError', 'undefined is not a string')



console.log('CASE meow() happy')

cat.meow()

assert.assert(cat.silent, false)
assert.assert(cat.message, 'Meow, meow')



console.log('CASE meow() unhappy on alive false')

cat.die()
try {
    cat.meow()
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'Error', 'tries to meow on alive false')



console.log('CASE meow() unhappy on awake false')

cat.alive = true
cat.sleep()
try {
    cat.meow()
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'Error', 'tries to meow on awake false')



console.log('CASE eat() happy on food string not lasagna')

cat.wakeUp()
cat.meow()
cat.eat('pilotes, què són de bones')
assert.assert(cat.silent, false)
assert.assert(cat.message, 'Meow, meow')
assert.assert(cat.eats, 'pilotes, què són de bones')



console.log('CASE eat() happy on food string lasagna')

cat.eat('lasagna')
assert.assert(cat.silent, true)
assert.assert(cat.message, '')
assert.assert(cat.eats, 'lasagna')



console.log('CASE eat() unhappy on food not a string')

try{
    cat.eat(52)
}catch (error){
    errorThrown = error
}
assert.error(errorThrown, 'TypeError', '52 is not a string')



console.log('CASE eat() unhappy on awake false')

cat.sleep()
try{
    cat.eat('lasagna')
}catch (error){
    errorThrown = error
}
assert.error(errorThrown, 'Error', 'tries to eat on awake false')



console.log('CASE eat() unhappy on alive false')

cat.die()
try{
    cat.eat('lasagna')
}catch (error){
    errorThrown = error
}
assert.error(errorThrown, 'Error', 'tries to eat on alive false')