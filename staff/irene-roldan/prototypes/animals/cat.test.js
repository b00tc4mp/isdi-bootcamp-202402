var assert = require('./assert')

var animal = require('./animal')
var person = require('./person')
var cat = require('./cat')

console.log('TEST ANIMAL') 
console.log('Test constructor')

var cat = new Cat ('Cupid', 'feline', new Date(1850, 1, 14, 14, 14), 'Russia', 25, 5, 'male')

