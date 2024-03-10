var assert = require('./assert')

var pinkie = require('./Dog')
var person = require('./Person')
var pet = require('./Pet')
var animal = require('./Animal')


console.log('TEST Dog')

console.log('CASE constructor')

var peter = new Person('Peter', 'Griffin', new Date(1984, 5, 31, 18, 45), 'EUA', 170, 110)
var pinkie = new Dog('Pinkie', new Date(2017, 1, 9, 12, 30), 'FR', 12)

assert.equalsValue(pinkie.constructor, Dog)
assert.instanceOf(pinkie, Dog)
assert.instanceOf(pinkie, Pet)
assert.instanceOf(pinkie, Animal)

assert.equalsValue(pinkie.name, 'Pinkie')
assert.instanceOf(pinkie.birthdate, Date)
assert.equalsValue(pinkie.birthdate.getFullYear(), 2017)
assert.equalsValue(pinkie.birthdate.getMounth(), 1)
assert.equalsValue(pinkie.birthdate.getDate(), 9)
assert.equalsValue(pinkie.birthdate.getHours(), 12)
assert.equalsValue(pinkie.birthdate.getminutes(), 30)
assert.equalsValue(pinkie.country, 'FR')
assert.equalsValue(pinkie.weight, 12)
assert.equalsValue(pinkie.sleeping, false)
assert.equalsValue(pinkie.eating, '')
assert.equalsValue(pinkie.legsSpeed, 0)
assert.equalsValue(pinkie.barking, false)

console.log('CASE sleep')

var pinkie = new Dog('Pinkie', new Date(2017, 1, 9, 12, 30), 'FR', 6)

pinkie.sleep()

assert.equalsValue(pinkie.sleeping, true)

console.log('CASE awake')

var pinkie = new Dog('Pinkie', new Date(2017, 1, 9, 12, 30), 'FR', 6)

pinkie.sleeping = true

pinkie.awake()

assert.equalsValue(pinkie.sleeping, false)

console.log('CASE eat')

var pinkie = new Dog('Pinkie', new Date(2017, 1, 9, 12, 30), 'FR', 6)

pinkie.eat('meat')

assert.equalsValue(pinkie.eating, 'meat')

console.log('CASE eat on sleeping (unhappy)')

var pinkie = new Dog('Pinkie', new Date(2017, 1, 9, 12, 30), 'FR', 6)

pinkie.sleeping = true

var errorThrown

try {
    pinkie.eat('dog food')
} catch (error) {
    errorThrown = error
}

assert.error(errorThrown, 'Error', 'try to eat on sleeping')


console.log('CASE not walk')

var pinkie = new Dog('Pinkie', new Date(2017, 1, 9, 12, 30), 'FR', 6)

pinkie.moveLegs(Dog.NOT_WALK)

assert.equalsValue(pinkie.legsSpeed, Dog.NOT_WALK)

console.log('CASE walk')

var pinkie = new Dog('Pinkie', new Date(2017, 1, 9, 12, 30), 'FR', 6)

pinkie.moveLegs()

assert.equalsValue(pinkie.legsSpeed, Dog.WALK_NORMAL)

console.log('CASE walk fast')

var pinkie = new Dog('Pinkie', new Date(2017, 1, 9, 12, 30), 'FR', 6)

pinkie.moveLegs(Dog.WALK_FAST)

assert.equalsValue(pinkie.legsSpeed, Dog.WALK_FAST)

console.log('CASE walk slow')

var pinkie = new Dog('Pinkie', new Date(2017, 1, 9, 12, 30), 'FR', 6)

pinkie.moveLegs(Dog.WALK_SLOW)

assert.equalsValue(pinkie.legsSpeed, Dog.WALK_SLOW)

console.log('CASE walk normal')

var pinkie = new Dog('Pinkie', new Date(2017, 1, 9, 12, 30), 'FR', 6)

pinkie.moveLegs(Dog.WALK_NORMAL)

assert.equalsValue(pinkie.legsSpeed, Dog.WALK_NORMAL)

console.log('CASE walk very slow')

var pinkie = new Dog('Pinkie', new Date(2017, 1, 9, 12, 30), 'FR', 6)

pinkie.moveLegs(Dog.WALK_VERY_SLOW)

assert.equalsValue(pinkie.legsSpeed, Dog.WALK_VERY_SLOW)

console.log('CASE run')

var pinkie = new Dog('Pinkie', new Date(2017, 1, 9, 12, 30), 'FR', 6)

pinkie.moveLegs(Dog.RUN)

assert.equalsValue(pinkie.legsSpeed, Dog.RUN)