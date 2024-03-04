var assert = require('./assert')


var Pet = require ('./pet')
var Person = require('./person')
var Dog = require('./dog')

var dog = new Dog (person, 'Nuk', 'canine', new Date(2010, 11, 15, 21, 30), 'Japan', 60, 20, 'male')

var person = new Person('Gregori', 'Rasputin', 'human', new Date(1869, 0, 21, 18, 4), 'Russia', 193, 105,'male')

assert.instanceOf(dog, Dog)
assert.equalsValue(dog.constructor, dog)
assert.equalsValue(dog.name, 'Nuk')
assert.instanceOf(dog.birthdate, Date)
assert.equalsValue(dog.birthdate.getFullYear(), 2010)
assert.equalsValue(dog.birthdate.getMonth(), 11)
assert.equalsValue(dog.birthdate.getDate(), 15)
assert.equalsValue(dog.birthdate.getHours(), 21)
assert.equalsValue(dog.birthdate.getMinutes(), 30)
assert.equalsValue(dog.country, 'Japan')
assert.equalsValue(dog.weight, 20)
assert.equalsValue(dog.height, 60)
assert.equalsValue(dog.sex, 'male')
assert.equalsValue(dog.sleeping, false)
assert.equalsValue(dog.eating, '')
assert.equalsValue(dog.legsSpeed, 0)

assert.instanceOf(dog, Dog)
assert.instanceOf(dog, Pet)

console.log('CASE METHOD BARK')

console.log('CASE METHOD NOT WALK')

dog.moveLegs(Dog.NOT_WALK)
assert.equalsValue(dog.legsSpeed, Dog.NOT_WALK)


console.log('CASE METHOD WALK FAST')

dog.moveLegs(Dog.WALK_FAST)
assert.equalsValue(dog.legsSpeed, Dog.WALK_FAST)

console.log('CASE METHOD WALK SLOW')

dog.moveLegs(Dog.WALK_SLOW)
assert.equalsValue(dog.legsSpeed, Dog.WALK_SLOW)

console.log('CASE METHOD WALK VERY SLOW')

dog.moveLegs(Dog.WALK_VERY_SLOW)
assert.equalsValue(dog.legsSpeed, Dog.WALK_VERY_SLOW)

console.log('CASE METHOD WALK NORMAL')

dog.moveLegs(Dog.WALK_NORMAL)
assert.equalsValue(dog.legsSpeed, Dog.WALK_NORMAL)

console.log('CASE METHOD RUN')

dog.moveLegs(Dog.WALK_NORMAL)
assert.equalsValue(dog.legsSpeed, Dog.WALK_NORMAL)

console.log('CASE METHOD BARK')

dog.sound('¡guau!')

assert.equalsValue(dog.talking, true)


console.log('CASE METHOD SHUT UP')

dog.shutUp('shh')
assert.equalsValue(dog.talking, false)

console.log('CASE METHOD SLEEP')

dog.sleep()
assert.equalsValue(dog.sleeping, true)

console.log('CASE METHOD AWAKE')

dog.sleeping = true

dog.awake()
assert.equalsValue(dog.sleeping, false)

console.log('CASE METHOD EAT')

dog.eat('sandwitch')
assert.equalsValue(dog.eating, 'sandwitch')

console.log('CASE METHOD FAIL - EAT ON SLEEPING')

dog.sleeping = true

var errorThrown 
try {
    dog.eat('banana')
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'Error', 'try to eat on sleeping')

console.log('CASE METHOD DRINK')

dog.sleeping = false
dog.drink('water')
assert.equalsValue(dog.drinking, 'water')

console.log('CASE METHOD FAIL - DRINK ON SLEEPING')

dog.sleeping = true

var errorThrown 
try {
    dog.drink('water')
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'Error', 'try to drink on sleeping')


console.log('CASE METHOD PISS')

dog.bladder = 70
dog.piss()
assert.equalsValue(dog.bladder, 0)

console.log('CASE METHOD PISS (Fail)')

var errorThrown 
try {
    dog.bladder = 'Hi'
    dog.piss() 
} catch (error) {
    errorThrown = error
}

assert.error(errorThrown, 'TypeError', 'is not a number');

console.log('CASE METHOD GET ENERGY')

dog.energy = 30
dog.getEnergy('almond', 'grape')
console.assert(dog.energy === 50, 50)

console.log('CASE METHOD GET ENERGY (FAIL)')

var errorThrown 
try {
    dog.getEnergy(7);
} catch (error) {
    errorThrown = error;
}

assert.error(errorThrown, 'TypeError', 'is not a string')

console.log('CASE METHOD DEFECATE')

dog.rectum = 100
dog.defecate()
assert.equalsValue(dog.rectum, 0)

dog.rectum = 30
dog.defecate()
assert.equalsValue(dog.rectum, 30)

console.log('CASE METHOD DEFECATE (FAIL)')

var errorThrown 
try {
    dog.rectum = 'Hi'
    dog.defecate() 
} catch (error) {
    errorThrown = error
}

assert.error(errorThrown, 'TypeError', 'is not a number')

console.log('CASE METHOD DIE')

dog.thirsty = true
dog.hungry = true
dog.sick = true

dog.die()
assert.equalsValue(dog.status, 'dead')


console.log('CASE METHOD WATCH OVER')

dog.watchOver('thieves')
assert.equalsValue(dog.talking, true)



