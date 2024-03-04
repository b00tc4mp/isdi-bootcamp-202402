var assert = require('./assert')

var Animal = require('./animal')
var Pet = require('./pet')
var Person = require('./person')

console.log('TEST Pet')

console.log('CASE constructor')

var person = new Person('Gregori', 'Rasputin', 'human', new Date(1869, 0, 21, 18, 4), 'Russia', 193, 105,'male')
var pet = new Pet(person, 'Bamboleos', 'pig',  new Date(2000, 0, 31, 16, 45), 'EEUU', 80, 50)

assert.instanceOf(pet, Pet)
assert.equalsValue(pet.constructor, Pet)
assert.equalsValue(pet.name, 'Bamboleos')
assert.instanceOf(pet.birthdate, Date)
assert.equalsValue(pet.birthdate.getFullYear(), 2000)
assert.equalsValue(pet.birthdate.getMonth(), 0)
assert.equalsValue(pet.birthdate.getDate(), 31)
assert.equalsValue(pet.birthdate.getHours(), 16)
assert.equalsValue(pet.birthdate.getMinutes(), 45)
assert.equalsValue(pet.country, 'EEUU')
assert.equalsValue(pet.weight, 50)
assert.equalsValue(pet.sleeping, false)
assert.equalsValue(pet.eating, '')
assert.equalsValue(pet.legsSpeed, 0)

assert.instanceOf(pet, Pet)
assert.instanceOf(pet, Animal)

console.log('CASE toString')


assert.equalsValue(pet.toString(), 'Pet (Graf, 2000-01-31, EEUU)')

/*
console.log('CASE constructor fails on non-Person owner')

var errorThrown;

try {
    var pet = new Pet(person, 'Bamboleos', 'pig',  new Date(2000, 0, 31, 16, 45), 'EEUU', 80, 50)
} catch (error) {
    errorThrown = error
}

assert.error(errorThrown, TypeError, 'owner is not an instance of Person')

*/



console.log('CASE METHOD NOT WALK')

pet.moveLegs(Pet.NOT_WALK)
assert.equalsValue(pet.legsSpeed, Pet.NOT_WALK)


console.log('CASE METHOD WALK FAST')

pet.moveLegs(Pet.WALK_FAST)
assert.equalsValue(pet.legsSpeed, Pet.WALK_FAST)

console.log('CASE METHOD WALK SLOW')

pet.moveLegs(Pet.WALK_SLOW)
assert.equalsValue(pet.legsSpeed, Pet.WALK_SLOW)

console.log('CASE METHOD WALK VERY SLOW')

pet.moveLegs(Pet.WALK_VERY_SLOW)
assert.equalsValue(pet.legsSpeed, Pet.WALK_VERY_SLOW)

console.log('CASE METHOD WALK NORMAL')

pet.moveLegs(Pet.WALK_NORMAL)
assert.equalsValue(pet.legsSpeed, Pet.WALK_NORMAL)

console.log('CASE METHOD RUN')

pet.moveLegs(Pet.WALK_NORMAL)
assert.equalsValue(pet.legsSpeed, Pet.WALK_NORMAL)

console.log('CASE METHOD SOUND')

pet.sound('¡oinc, oinc!')

assert.equalsValue(pet.talking, true)


console.log('CASE METHOD SHUT UP')

pet.shutUp('shh')
assert.equalsValue(pet.talking, false)

console.log('CASE METHOD SLEEP')

pet.sleep()
assert.equalsValue(pet.sleeping, true)

console.log('CASE METHOD AWAKE')

pet.sleeping = true

pet.awake()
assert.equalsValue(pet.sleeping, false)

console.log('CASE METHOD EAT')

pet.eat('sandwitch')
assert.equalsValue(pet.eating, 'sandwitch')

console.log('CASE METHOD FAIL - EAT ON SLEEPING')

pet.sleeping = true

var errorThrown 
try {
    pet.eat('banana')
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'Error', 'try to eat on sleeping')

console.log('CASE METHOD DRINK')

pet.sleeping = false
pet.drink('water')
assert.equalsValue(pet.drinking, 'water')

console.log('CASE METHOD FAIL - DRINK ON SLEEPING')

pet.sleeping = true

var errorThrown 
try {
    pet.drink('water')
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'Error', 'try to drink on sleeping')


console.log('CASE METHOD PISS')

pet.bladder = 70
pet.piss()
assert.equalsValue(pet.bladder, 0)

console.log('CASE METHOD PISS (Fail)')

var errorThrown 
try {
    pet.bladder = 'Hi'
    pet.piss() 
} catch (error) {
    errorThrown = error
}

assert.error(errorThrown, 'TypeError', 'is not a number');

console.log('CASE METHOD GET ENERGY')

pet.energy = 30
pet.getEnergy('almond', 'grape')
console.assert(pet.energy === 50, 50)

console.log('CASE METHOD GET ENERGY (FAIL)')

var errorThrown 
try {
    pet.getEnergy(7);
} catch (error) {
    errorThrown = error;
}

assert.error(errorThrown, 'TypeError', 'is not a string')

console.log('CASE METHOD DEFECATE')

pet.rectum = 100
pet.defecate()
assert.equalsValue(pet.rectum, 0)

pet.rectum = 30
pet.defecate()
assert.equalsValue(pet.rectum, 30)

console.log('CASE METHOD DEFECATE (FAIL)')

var errorThrown 
try {
    pet.rectum = 'Hi'
    pet.defecate() 
} catch (error) {
    errorThrown = error
}

assert.error(errorThrown, 'TypeError', 'is not a number')

console.log('CASE METHOD DIE')

pet.thirsty = true
pet.hungry = true
pet.sick = true

pet.die()
assert.equalsValue(pet.status, 'dead')

