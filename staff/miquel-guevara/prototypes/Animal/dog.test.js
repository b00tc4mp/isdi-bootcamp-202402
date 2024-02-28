var assert = require('./assert')

var Dog = require('./dog')


console.log('TEST Dog')

console.log('CASE constructor')

var dog = new Dog('Bartolo', new Date(2017, 1, 9, 12, 30), 'FR', 6)

assert.equalsValue(dog.name, 'Bartolo')
assert.instanceOf(dog.birthdate, Date)
assert.equalsValue(dog.birthdate.getFullYear(), 2017)
assert.equalsValue(dog.birthdate.getMonth(), 1)
assert.equalsValue(dog.birthdate.getDate(), 9)
assert.equalsValue(dog.birthdate.getHours(), 12)
assert.equalsValue(dog.birthdate.getMinutes(), 30)
assert.equalsValue(dog.country, 'FR')
assert.equalsValue(dog.weight, 6)
assert.equalsValue(dog.sleeping, false)
assert.equalsValue(dog.eating, '')
assert.equalsValue(dog.legsSpeed, 0)

console.log('CASE sleep')

var dog = new Dog('Bartolo', new Date(2017, 1, 9, 12, 30), 'FR', 6)

dog.sleep()

assert.equalsValue(dog.sleeping, true)

console.log('CASE awake')

var dog = new Dog('Bartolo', new Date(2017, 1, 9, 12, 30), 'FR', 6)

dog.sleeping = true

dog.awake()

assert.equalsValue(dog.sleeping, false)

console.log('CASE eat')

var dog = new Dog('Bartolo', new Date(2017, 1, 9, 12, 30), 'FR', 6)

dog.eat('meat')

assert.equalsValue(dog.eating, 'meat')

console.log('CASE eat on sleeping (unhappy)')

var dog = new Dog('Bartolo', new Date(2017, 1, 9, 12, 30), 'FR', 6)

dog.sleeping = true

var errorThrown

try {
    dog.eat('dog food')
} catch (error) {
    errorThrown = error
}

assert.error(errorThrown, 'Error', 'try to eat on sleeping')


console.log('CASE not walk')

var dog = new Dog('Bartolo', new Date(2017, 1, 9, 12, 30), 'FR', 6)

dog.moveLegs(Dog.NOT_WALK)

assert.equalsValue(dog.legsSpeed, Dog.NOT_WALK)

console.log('CASE walk')

var dog = new Dog('Bartolo', new Date(2017, 1, 9, 12, 30), 'FR', 6)

dog.moveLegs()

assert.equalsValue(dog.legsSpeed, Dog.WALK_NORMAL)

console.log('CASE walk fast')

var dog = new Dog('Bartolo', new Date(2017, 1, 9, 12, 30), 'FR', 6)

dog.moveLegs(Dog.WALK_FAST)

assert.equalsValue(dog.legsSpeed, Dog.WALK_FAST)

console.log('CASE walk slow')

var dog = new Dog('Bartolo', new Date(2017, 1, 9, 12, 30), 'FR', 6)

dog.moveLegs(Dog.WALK_SLOW)

assert.equalsValue(dog.legsSpeed, Dog.WALK_SLOW)

console.log('CASE walk normal')

var dog = new Dog('Bartolo', new Date(2017, 1, 9, 12, 30), 'FR', 6)

dog.moveLegs(Dog.WALK_NORMAL)

assert.equalsValue(dog.legsSpeed, Dog.WALK_NORMAL)

console.log('CASE walk very slow')

var dog = new Dog('Bartolo', new Date(2017, 1, 9, 12, 30), 'FR', 6)

dog.moveLegs(Dog.WALK_VERY_SLOW)

assert.equalsValue(dog.legsSpeed, Dog.WALK_VERY_SLOW)

console.log('CASE run')

var dog = new Dog('Bartolo', new Date(2017, 1, 9, 12, 30), 'FR', 6)

dog.moveLegs(Dog.RUN)

assert.equalsValue(dog.legsSpeed, Dog.RUN)