var assert = require('./assert')

var Pet = require('./Pet')


console.log('TEST Pet')

console.log('CASE constructor')

var pet = new Pet('Ayra', new Date(2008, 8, 3, 16, 45), 'CZ', 15)

assert.equalsValue(pet.name, 'Ayra')
assert.instanceOf(pet.birthdate, Date)
assert.equalsValue(pet.birthdate.getFullYear(), 2008)
assert.equalsValue(pet.birthdate.getMonth(), 8)
assert.equalsValue(pet.birthdate.getDate(), 3)
assert.equalsValue(pet.birthdate.getHours(), 16)
assert.equalsValue(pet.birthdate.getMinutes(), 45)
assert.equalsValue(pet.country, 'CZ')
assert.equalsValue(pet.weight, 15)
assert.equalsValue(pet.sleeping, false)
assert.equalsValue(pet.eating, '')
assert.equalsValue(pet.legsSpeed, 0)

console.log('CASE sleep')

var pet = new Pet('Ayra', new Date(2008, 8, 3, 16, 45), 'CZ ', 15)

pet.sleep()

assert.equalsValue(pet.sleeping, true)

console.log('CASE awake')

var pet = new Pet('Ayra', new Date(2008, 8, 3, 16, 45), 'CZ ', 15)

pet.sleeping = true

pet.awake()

assert.equalsValue(pet.sleeping, false)

console.log('CASE eat')

var pet = new Pet('Ayra', new Date(2008, 8, 3, 16, 45), 'CZ ', 15)

pet.eat('dog food')

assert.equalsValue(pet.eating, 'dog food')

console.log('CASE eat on sleeping (unhappy)')

var pet = new Pet('Ayra', new Date(2008, 8, 3, 16, 45), 'CZ ', 15)

pet.sleeping = true

var errorThrown

try {
    pet.eat('dog food')
} catch (error) {
    errorThrown = error
}

assert.error(errorThrown, 'Error', 'try to eat on sleeping')


console.log('CASE not walk')

var pet = new Pet('Ayra', new Date(2008, 8, 3, 16, 45), 'CZ ', 15)

pet.moveLegs(Pet.NOT_WALK)

assert.equalsValue(pet.legsSpeed, Pet.NOT_WALK)

console.log('CASE walk')

var pet = new Pet('Ayra', new Date(2008, 8, 3, 16, 45), 'CZ ', 15)

pet.moveLegs()

assert.equalsValue(pet.legsSpeed, Pet.WALK_NORMAL)

console.log('CASE walk fast')

var pet = new Pet('Ayra', new Date(2008, 8, 3, 16, 45), 'CZ ', 15)

pet.moveLegs(Pet.WALK_FAST)

assert.equalsValue(pet.legsSpeed, Pet.WALK_FAST)

console.log('CASE walk slow')

var pet = new Pet('Ayra', new Date(2008, 8, 3, 16, 45), 'CZ ', 15)

pet.moveLegs(Pet.WALK_SLOW)

assert.equalsValue(pet.legsSpeed, Pet.WALK_SLOW)

console.log('CASE walk normal')

var pet = new Pet('Ayra', new Date(2008, 8, 3, 16, 45), 'CZ ', 15)

pet.moveLegs(Pet.WALK_NORMAL)

assert.equalsValue(pet.legsSpeed, Pet.WALK_NORMAL)

console.log('CASE walk very slow')

var pet = new Pet('Ayra', new Date(2008, 8, 3, 16, 45), 'CZ ', 15)

pet.moveLegs(Pet.WALK_VERY_SLOW)

assert.equalsValue(pet.legsSpeed, Pet.WALK_VERY_SLOW)

console.log('CASE run')

var pet = new Pet('Ayra', new Date(2008, 8, 3, 16, 45), 'CZ ', 15)

pet.moveLegs(Pet.RUN)

assert.equalsValue(pet.legsSpeed, Pet.RUN)