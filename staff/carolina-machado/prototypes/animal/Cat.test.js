var assert = require('./assert')

var Animal = require('./Animal')
var Pet = require('./Pet')
var Person = require('./Person')
var Cat = require('./Cat')

console.log('TEST CAT')

console.log('CASE constructor')

var peter = new Person('Peter', 'Pan', new Date(2000, 0, 31, 16, 45), 'GB', 140, 50)
var mia = new Cat(peter, 'Mia', undefined, 'ES', 8)

assert.equalsValue(mia.constructor, Cat)
assert.instanceOf(mia, Cat)
assert.instanceOf(mia, Pet)
assert.instanceOf(mia, Animal)

assert.equalsValue(mia.name, 'Mia')
assert.equalsValue(mia.country, 'ES')
assert.equalsValue(mia.weight, 8)
assert.equalsValue(mia.sleeping, false)
assert.equalsValue(mia.eating, '')
assert.equalsValue(mia.jumping, '')




console.log('CASE jump')

var peter = new Person('Peter', 'Pan', new Date(2000, 0, 31, 16, 45), 'GB', 140, 50)
var mia = new Cat(peter, 'Mia', undefined, 'ES', 8)

mia.awake()

mia.jump(3)





console.log('CASE eat')

var peter = new Person('Peter', 'Pan', new Date(2000, 0, 31, 16, 45), 'GB', 140, 50)
var mia = new Cat(peter, 'Mia', undefined, 'ES', 8)

mia.awake()

mia.eat('latita Purina')

mia.jump(3)



console.log('CASE snore')

mia.sleep()

mia.snore()


console.log('CASE snore unhappy')

mia.awake()

var errorThrown

try {
    mia.snore()
} catch (error) {
    errorThrown = error
}

assert.error(errorThrown, 'Error', 'cant snore when awake')
//console.log(errorThrown.message)
//console.log(mia)

console.log('CASE shower')


mia.shower('dirty')

console.log(mia)
