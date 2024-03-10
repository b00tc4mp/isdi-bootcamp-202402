var assert = require('./assert')

var Person = require('./Person')

console.log('TEST Person')

console.log('CASE constructor')

var peter = new Person('Peter', 'Griffin', new Date(1984, 5, 31, 18, 45), 'EUA', 170, 110)

assert.instanceOf(peter, Person)
assert.equalsValue(peter.constructor, Person)
assert.equalsValue(peter.name, 'Peter')
assert.equalsValue(peter.surname, 'Griffin')
//assert.equalsValue(person.birthdate instanceof Date, true)
assert.instanceOf(peter.birthdate, Date)
assert.equalsValue(peter.birthdate.getFullYear(), 1984)
assert.equalsValue(peter.birthdate.getMonth(), 5)
assert.equalsValue(peter.birthdate.getDate(), 31)
assert.equalsValue(peter.birthdate.getHours(), 18)
assert.equalsValue(peter.birthdate.getMinutes(), 45)
assert.equalsValue(peter.country, 'EUA')
assert.equalsValue(peter.height, 170)
assert.equalsValue(peter.weight, 110)
assert.equalsValue(peter.sleeping, false)
assert.equalsValue(peter.eating, '')
assert.equalsValue(peter.legsSpeed, Person.NOT_WALK)
assert.equalsValue(peter.talking, false)

console.log('CASE walk & talk')

var peter = new Person('Peter', 'Griffin', new Date(1984, 5, 31, 18, 45), 'EUA', 170, 110)

peter.moveLegs()
peter.talk()

assert.equalsValue(peter.talking, true)
assert.equalsValue(peter.legsSpeed, Person.WALK_NORMAL)