var assert = require('./assert')


var Pet = require ('./pet')
var Person = require('./person')
var Cat = require('./cat')

console.log('TEST Cat') 
console.log('Test constructor')

var cat = new Cat (person, 'Cupid', 'feline', new Date(1850, 1, 14, 14, 14), 'Spain', 25, 5, 'male')
var person = new Person('Gregori', 'Rasputin', 'human', new Date(1869, 0, 21, 18, 4), 'Russia', 193, 105,'male')

assert.instanceOf(cat, Cat)
assert.equalsValue(cat.constructor, Cat)
assert.equalsValue(cat.name, 'Cupid')
assert.instanceOf(cat.birthdate, Date)
assert.equalsValue(cat.birthdate.getFullYear(), 1850)
assert.equalsValue(cat.birthdate.getMonth(), 1)
assert.equalsValue(cat.birthdate.getDate(), 14)
assert.equalsValue(cat.birthdate.getHours(), 14)
assert.equalsValue(cat.birthdate.getMinutes(), 14)
assert.equalsValue(cat.country, 'Spain')
assert.equalsValue(cat.weight, 5)
assert.equalsValue(cat.height, 25)
assert.equalsValue(cat.sex, 'male')
assert.equalsValue(cat.sleeping, false)
assert.equalsValue(cat.eating, '')
assert.equalsValue(cat.legsSpeed, 0)

assert.instanceOf(cat, Cat)
assert.instanceOf(cat, Pet)

console.log('CASE METHOD NOT WALK')

cat.moveLegs(Cat.NOT_WALK)
assert.equalsValue(cat.legsSpeed, Cat.NOT_WALK)


console.log('CASE METHOD WALK FAST')

cat.moveLegs(Cat.WALK_FAST)
assert.equalsValue(cat.legsSpeed, Cat.WALK_FAST)

console.log('CASE METHOD WALK SLOW')

cat.moveLegs(Cat.WALK_SLOW)
assert.equalsValue(cat.legsSpeed, Cat.WALK_SLOW)

console.log('CASE METHOD WALK VERY SLOW')

cat.moveLegs(Cat.WALK_VERY_SLOW)
assert.equalsValue(cat.legsSpeed, Cat.WALK_VERY_SLOW)

console.log('CASE METHOD WALK NORMAL')

cat.moveLegs(Cat.WALK_NORMAL)
assert.equalsValue(cat.legsSpeed, Cat.WALK_NORMAL)

console.log('CASE METHOD RUN')

cat.moveLegs(Cat.WALK_NORMAL)
assert.equalsValue(cat.legsSpeed, Cat.WALK_NORMAL)

console.log('CASE METHOD MAULLAR')

cat.sound('¡Miau!')

assert.equalsValue(cat.talking, true)


console.log('CASE METHOD SHUT UP')

cat.shutUp('shh')
assert.equalsValue(cat.talking, false)

console.log('CASE METHOD SLEEP')

cat.sleep()
assert.equalsValue(cat.sleeping, true)

console.log('CASE METHOD AWAKE')

cat.sleeping = true

cat.awake()
assert.equalsValue(cat.sleeping, false)

console.log('CASE METHOD EAT')

cat.eat('sandwitch')
assert.equalsValue(cat.eating, 'sandwitch')

console.log('CASE METHOD FAIL - EAT ON SLEEPING')

cat.sleeping = true

var errorThrown 
try {
    cat.eat('banana')
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'Error', 'try to eat on sleeping')

console.log('CASE METHOD DRINK')

cat.sleeping = false
cat.drink('water')
assert.equalsValue(cat.drinking, 'water')

console.log('CASE METHOD FAIL - DRINK ON SLEEPING')

cat.sleeping = true

var errorThrown 
try {
    cat.drink('water')
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'Error', 'try to drink on sleeping')


console.log('CASE METHOD PISS')

cat.bladder = 70
cat.piss()
assert.equalsValue(cat.bladder, 0)

console.log('CASE METHOD PISS (Fail)')

var errorThrown 
try {
    cat.bladder = 'Hi'
    cat.piss() 
} catch (error) {
    errorThrown = error
}

assert.error(errorThrown, 'TypeError', 'is not a number');

console.log('CASE METHOD GET ENERGY')

cat.energy = 30
cat.getEnergy('almond', 'grape')
console.assert(cat.energy === 50, 50)

console.log('CASE METHOD GET ENERGY (FAIL)')

var errorThrown 
try {
    cat.getEnergy(7);
} catch (error) {
    errorThrown = error;
}

assert.error(errorThrown, 'TypeError', 'is not a string')

console.log('CASE METHOD DEFECATE')

cat.rectum = 100
cat.defecate()
assert.equalsValue(cat.rectum, 0)

cat.rectum = 30
cat.defecate()
assert.equalsValue(cat.rectum, 30)

console.log('CASE METHOD DEFECATE (FAIL)')

var errorThrown 
try {
    cat.rectum = 'Hi'
    cat.defecate() 
} catch (error) {
    errorThrown = error
}

assert.error(errorThrown, 'TypeError', 'is not a number')

console.log('CASE METHOD DIE')

cat.thirsty = true
cat.hungry = true
cat.sick = true

cat.die()
assert.equalsValue(cat.status, 'dead')


console.log('CASE METHOD ESCAPE')

cat.boring = true
cat.escape()
assert.equalsValue(cat.situation, 'out of home')
