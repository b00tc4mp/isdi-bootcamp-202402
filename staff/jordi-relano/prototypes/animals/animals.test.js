var assert = require('./testing-tools')

var Animals = require('./animals')

console.log('CASE constructor')

console.log('Test animals')

var animal = new Animals('kilombito', 'bulldog', 10, 30, 'male')


assert.equalsValue(animal.name, 'kilombito')
assert.equalsValue(animal.species, 'dog')
assert.equalsValue(animal.age, 10)
assert.equalsValue(animal.weight, 30)
assert.equalsValue(animal.gender, 'male')

console.log('CASE move')
var animal = new Animals('kilombito', 'bulldog', 10, 30, 'male')
animal.moving()
assert.equalsValue(animal.move, true)

console.log('CASE stop')
var animal = new Animals('kilombito', 'bulldog', 10, 30, 'male')
animal.stopping()
assert.equalsValue(animal.move, false)

console.log('CASE breathe')
var animal = new Animals('kilombito', 'bulldog', 10, 30, 'male')
animal.breathing()
assert.equalsValue(animal.breathe, true)

console.log('CASE sleep')
var animal = new Animals('kilombito', 'bulldog', 10, 30, 'male')
animal.sleeping()
assert.equalsValue(animal.sleep, true)

console.log('CASE awake')
var animal = new Animals('kilombito', 'bulldog', 10, 30, 'male')
animal.awaking()
assert.equalsValue(animal.sleep, false)

console.log('CASE eat')
var animal = new Animals('kilombito', 'bulldog', 10, 30, 'male')
animal.eating('asadito')
assert.equalsValue(animal.eat, 'asadito')

console.log('CASE makingNoise')
var animal = new Animals('kilombito', 'bulldog', 10, 30, 'male')
animal.makingNoise('SIUU')
assert.equalsValue(animal.makeNoise, 'SIUU')

console.log('CASE running')
var animal = new Animals('kilombito', 'bulldog', 10, 30, 'male')
animal.running(Animals.RUN)
assert.equalsValue(animal.moveLegs, Animals.RUN)








