var assert = require('./assert')
var Animal = require('./animal')

console.log('TEST ANIMAL') 
console.log('Test constructor')

var animal = new Animal('Nico', 'macaw', new Date(2018, 4, 24, 12, 12), 'Colombia', 85, 1.2, 'male')

assert.equalsValue(animal.name,'Nico')
assert.equalsValue(animal.specie, 'macaw')
assert.instanceOf(animal.birthdate, Date)
assert.equalsValue(animal.birthdate.getFullYear(), 2018)
assert.equalsValue(animal.birthdate.getMonth(), 4)
assert.equalsValue(animal.birthdate.getDate(), 24)
assert.equalsValue(animal.birthdate.getHours(), 12)
assert.equalsValue(animal.birthdate.getMinutes(), 12)
assert.equalsValue(animal.country, 'Colombia', 'Colombia')
assert.equalsValue(animal.habitat, 'forest tropical')
assert.equalsValue(animal.diet = 'omnivorous', 'omnivorous')
assert.equalsValue(animal.height, 85)
assert.equalsValue(animal.weight, 1.2)
assert.equalsValue(animal.reproduction, 'oviparous')
assert.equalsValue(animal.sex,'male')
assert.equalsValue(animal.sleeping, false)
assert.equalsValue(animal.eating, '')
assert.equalsValue(animal.drinking,'')
assert.equalsValue(animal.thirsty, false)
assert.equalsValue(animal.hungry, false)
assert.equalsValue(animal.sick, false)
assert.equalsValue(animal.status,'living')
assert.equalsValue(animal.energy, 100)
assert.equalsValue(animal.rectum, 50)

console.log('CASE METHOD SLEEP')

animal.sleep()

assert.equalsValue(animal.sleeping, true)

console.log('CASE METHOD AWAKE')

animal.sleeping = true

animal.awake()

assert.equalsValue(animal.sleeping, false)

console.log('CASE METHOD EAT')

animal.eat('nuts')
assert.equalsValue(animal.eating, 'nuts')

console.log('CASE METHOD FAIL - EAT ON SLEEPING')

animal.sleeping = true

var errorThrown = ''
try {
    animal.eat('nuts')
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'Error', 'try to eat on sleeping')

console.log('CASE METHOD DRINK')

animal.drink('water')
assert.equalsValue(animal.drinking, 'water')

console.log('CASE METHOD FAIL - DRINK ON SLEEPING')

animal.sleeping = true

var errorThrown = ''
try {
    animal.drink('water')
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'Error', 'try to drink on sleeping')

console.log('CASE METHOD DIE')

animal.thirsty = true
animal.hungry = true
animal.sick = true

animal.die()
assert.equalsValue(animal.status, 'dead')

console.log('CASE METHOD DEFECATE')

animal.rectum = 100
animal.defecate()
assert.equalsValue(animal.rectum, 0)

animal.rectum = 30
animal.defecate()
assert.equalsValue(animal.rectum, 30)

console.log('CASE METHOD DEFECATE (FAIL)')

var errorThrown 
try {
    animal.rectum = 'Hi'
    animal.defecate() 
} catch (error) {
    errorThrown = error
}

assert.error(errorThrown, 'TypeError', 'is not a number');

console.log('CASE METHOD PISS')
console.log('CASE METHOD GET ENERGY')


animal.energy = 30
animal.getEnergy('almond', 'grape')
console.assert(animal.energy === 50, 50)

console.log('CASE METHOD GET ENERGY (FAIL)')

var errorThrown = ''
try {
    animal.getEnergy(7);
} catch (error) {
    errorThrown = error;
}

assert.error(errorThrown, 'TypeError', 'is not a string')