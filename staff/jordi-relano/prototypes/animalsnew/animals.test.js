var Animals = require('./animals');
var assert = require('./testing-tools');

console.log('Animals');

console.log('constructor');

var animals = new Animals('Gregorio', 'Cat', 15);

assert.equalsValue(animals.name, 'Gregorio');
assert.equalsValue(animals.species, 'Cat');
assert.equalsValue(animals.age, 15);

console.log('CASE move');
var animals = new Animals('Gregorio', 'Cat', 15);
animals.energy = 90;
// set interval (buscar)
animals.move();
assert.equalsValue(animals.moving, true);
assert.equalsValue(animals.energy, 80);

console.log('CASE breathe');
var animals = new Animals('Gregorio', 'Cat', 15);
animals.breathe();
assert.equalsValue(animals.breathing, true);

console.log('CASE eat');
var animals = new Animals('Gregorio', 'Cat', 15);
animals.energy = 40;
animals.eat();
assert.equalsValue(animals.eating, true);
assert.equalsValue(animals.energy, 50);








