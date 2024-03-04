var assert = require('./testing-tools')

var Dog = require('./dog')

console.log('CASE dog');

var dog = Dog('Peliaoculiao', 20, 'huge', 60, 'unknown')

assert.equalsValue(Dog.name, 'peliaoculiao') 
assert.equalsValue(Dog.age, 20) 
assert.equalsValue(Dog.size, 'huge') 
assert.equalsValue(Dog.weigth, 60)
assert.equalsValue(Dog.breed, 'unknown')

console.log('CASE move')
var dog = Dog('Peliaoculiao', 20, 'huge', 60, 'unknown')
dog.moving()
assert.equalsValue(this.move, true)

console.log('CASE breathe')
var dog = Dog('Peliaoculiao', 20, 'huge', 60, 'unknown')
dog.breathing



console.log('CASE eat')
var dog = Dog('Peliaoculiao', 20, 'huge', 60, 'unknown')






console.log('CASE sleep')
var dog = Dog('Peliaoculiao', 20, 'huge', 60, 'unknown')



console.log('CASE moveLegs')
var dog = Dog('Peliaoculiao', 20, 'huge', 60, 'unknown')













