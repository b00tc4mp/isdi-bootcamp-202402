var Animal = require ('./Animal')
var assert = require ('./assert')


console.log('CASE Animal constructor happy')

var animal = new Animal(new Date(2020, 1, 8), 2.5, 0.3, 2)

assert.instanceOf(animal, Animal)

assert.assert(animal.birthday.getFullYear(), 2020)
assert.assert(animal.birthday.getMonth(), 1)
assert.assert(animal.birthday.getDate(), 8)
assert.assert(animal.weight, 2.5)
assert.assert(animal.height, 0.3)
assert.assert(animal.legs, 2)
assert.assert(animal.eats, '')
assert.assert(animal.awake, true)
assert.assert(animal.speed, 0)
assert.assert(animal.alive, true)
assert.assert(animal.silent, 'is silent')
assert.assert(animal.message, 'is saying nothing')


console.log('CASE Animal constructor birthday unhappy')

var errorThrown
try {
    animal = new Animal('12Oct21', 2.5, 0.3, 2)
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'TypeError', '12Oct21 is not a Date')



console.log('CASE Animal constructor weight unhappy')

try {
    animal = new Animal(new Date(2020, 1, 8), '2.5', 0.3, 2)
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'TypeError', '2.5 is not a number')

try {
    animal = new Animal(new Date(2020, 1, 8), -7, 0.3, 2)
} catch (error){
    errorThrown  = error
}
assert.error(errorThrown, 'RangeError', 'weight needs to be positive')



console.log('CASE Animal constructor height unhappy')

try {
    animal = new Animal(new Date(2020, 1, 8), 2.5, '0.3', 2)
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'TypeError', '0.3 is not a number')

try {
    animal = new Animal(new Date(2020, 1, 8), 2.5, -0.3, 2)
} catch (error){
    errorThrown  = error
}
assert.error(errorThrown, 'RangeError', 'height needs to be positive')



console.log('CASE Animal constructor legs unhappy')

try {
    animal = new Animal(new Date(2020, 1, 8), 2.5, 0.3, '2')
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'TypeError', '2 is not an Integer')

try {
    animal = new Animal(new Date(2020, 1, 8), 2.5, 0.3, -2)
} catch (error){
    errorThrown  = error
}
assert.error(errorThrown, 'RangeError', 'legs needs to be positive')



console.log('CASE eat() happy')

animal.eat('espaguetis')
assert.assert(animal.eats, 'espaguetis')



console.log('CASE eat() unhappy not a String')

try{
    animal.eat(4)
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'TypeError', '4 is not a String')



console.log('CASE sleep() happy')

animal.sleep()
assert.assert(animal.awake, false)



console.log('CASE try to eat on awake false unhappy')

try{
    animal.eat('lechuga')
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'Error', 'tries to eat on awake false')



console.log('CASE wakeUp() happy')

animal.wakeUp()
assert.assert(animal.awake, true)



console.log('CASE moves() happy happy')

animal.move(5)
assert.assert(animal.speed, 5)



console.log('CASE moves() unhappy not a String')

try{
    animal.move('A toda hostia')
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'TypeError', 'A toda hostia is not a number')



console.log('CASE moves() unhappy out of range')

try{
    animal.move(-7)
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'RangeError', 'speed must be positive')



console.log('CASE moves() unhappy try to use move on awake false')

animal.sleep()
try{
    animal.move(3)
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'Error', 'try to move on awake false')




console.log('CASE die() happy')

animal.wakeUp()
animal.die()
assert.assert(animal.alive, false)



console.log('CASE eat() on alive false unhappy')

try{
    animal.eat('Una buena hostia')
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'Error', 'tries to eat on alive false')



console.log('CASE sleep() on alive false unhappy')

try{
    animal.sleep()
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'Error', 'tries to sleep on alive false')



console.log('CASE wakeUp() on alive false unhappy')

animal.alive = true
animal.sleep()
animal.die()
try{
    animal.wakeUp()
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'Error', 'tries to wake up on alive false')



console.log('CASE move() on alive false unhappy')

animal.alive = true
animal.wakeUp()
animal.die()
try{
    animal.move(12)
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'Error', 'tries to move on alive false')