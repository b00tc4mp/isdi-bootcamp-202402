var assert = require('./assert')

var Person = require('./Person')

console.log('TEST Person')

console.log('CASE constructor')

var person = new Person('Peter', 'Griffin', new Date(1984, 2, 8, 10, 20), 'EUA', 170, 110)

assert.equalsValue(person.name, 'Peter')
assert.equalsValue(person.surname, 'Griffin')
//assert.equalsValue(person.birthdate instanceof Date, true)
assert.instanceOf(person.birthdate, Date)
assert.equalsValue(person.birthdate.getFullYear(), 1984)
assert.equalsValue(person.birthdate.getMonth(), 2)
assert.equalsValue(person.birthdate.getDate(), 8)
assert.equalsValue(person.birthdate.getHours(), 10)
assert.equalsValue(person.birthdate.getMinutes(), 20)
assert.equalsValue(person.country, 'EUA')
assert.equalsValue(person.height, 170)
assert.equalsValue(person.weight, 110)
assert.equalsValue(person.sleeping, false)
assert.equalsValue(person.eating, '')
assert.equalsValue(person.legsSpeed, Person.NOT_WALK)

console.log('CASE sleep')

var person = new Person('Peter', 'Griffin', new Date(1984, 2, 8, 10, 20), 'EUA', 170, 110)

person.sleep()

assert.equalsValue(person.sleeping, true)

console.log('CASE awake')

var person = new Person('Peter', 'Griffin', new Date(1984, 2, 8, 10, 20), 'EUA', 170, 110)

person.sleeping = true

person.awake()

assert.equalsValue(person.sleeping, false)

console.log('CASE eat')

var person = new Person('Peter', 'Griffin', new Date(1984, 2, 8, 10, 20), 'EUA', 170, 110)

person.eat('meat')

assert.equalsValue(person.eating, 'meat')

console.log('CASE eat on sleeping (unhappy)')

var person = new Person('Peter', 'Griffin', new Date(1984, 2, 8, 10, 20), 'EUA', 170, 110)

person.sleeping = true

var errorThrown

try {
    person.eat('meat')
} catch (error) {
    errorThrown = error
}

assert.error(errorThrown, 'Error', 'try to eat on sleeping')


console.log('CASE walk')

var person = new Person('Peter', 'Griffin', new Date(1984, 2, 8, 10, 20), 'EUA', 170, 110)

person.moveLegs()

assert.equalsValue(person.legsSpeed, Person.WALK_NORMAL)

console.log('CASE walk fast')

var person = new Person('Peter', 'Griffin', new Date(1984, 2, 8, 10, 20), 'EUA', 170, 110)

person.moveLegs(Person.WALK_FAST)

assert.equalsValue(person.legsSpeed, Person.WALK_FAST)

console.log('CASE walk slow')

var person = new Person('Peter', 'Griffin', new Date(1984, 2, 8, 10, 20), 'EUA', 170, 110)

person.moveLegs(Person.WALK_SLOW)

assert.equalsValue(person.legsSpeed, Person.WALK_SLOW)

console.log('CASE walk normal')

var person = new Person('Peter', 'Griffin', new Date(1984, 2, 8, 10, 20), 'EUA', 170, 110)

person.moveLegs(Person.WALK_NORMAL)

assert.equalsValue(person.legsSpeed, Person.WALK_NORMAL)

console.log('CASE walk very slow')

var person = new Person('Peter', 'Griffin', new Date(1984, 2, 8, 10, 20), 'EUA', 170, 110)

person.moveLegs(Person.WALK_VERY_SLOW)

assert.equalsValue(person.legsSpeed, Person.WALK_VERY_SLOW)

console.log('CASE talk')

var person = new Person('Peter', 'Griffin', new Date(1984, 2, 8, 10, 20), 'EUA', 170, 110)

person.talk()

assert.equalsValue(person.talking, true)

console.log('CASE walk & talk')

var person = new Person('Peter', 'Griffin', new Date(1984, 2, 8, 10, 20), 'EUA', 170, 110)

person.moveLegs()
person.talk()

assert.equalsValue(person.talking, true)
assert.equalsValue(person.legsSpeed, Person.WALK_NORMAL)