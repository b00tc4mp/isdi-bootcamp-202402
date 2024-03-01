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

console.log('CASE bark')

var peter = new Person('Peter', 'Pan', new Date(2000, 0, 31, 16, 45), 'GB', 140, 50)
var sultan = new Dog(peter, 'Pinkie', new Date(2000, 0, 31, 16, 45), 'GB', 50)

pinkie.bark()

assert.equalsValue(pinkie.barking, true)

console.log('CASE tsssh')

var peter = new Person('Peter', 'Pan', new Date(2000, 0, 31, 16, 45), 'GB', 140, 50)
var sultan = new Dog(peter, 'Pinkie', new Date(2000, 0, 31, 16, 45), 'GB', 50)

pinkie.barking = true

sultan.tsssh()

assert.equalsValue(pinkie.barking, false)
