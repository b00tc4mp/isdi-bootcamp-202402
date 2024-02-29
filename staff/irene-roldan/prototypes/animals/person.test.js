var Person = require ('./person')
var assert = require ('./assert')
var Animal = require('./animal')

console.log('Test Person')

console.log('Case constructor')

var person = new Person('Gregori', 'Rasputin', 'human', new Date(1869, 0, 21, 18, 4), 'Russia', 193, 105,'male')

assert.equalsValue(person.name, 'Gregori')
assert.equalsValue(person.surname, 'Rasputin')
assert.equalsValue(person.specie, 'human')
assert.instanceOf(person.birthdate, Date)
assert.equalsValue(person.birthdate.getFullYear(), 1869)
assert.equalsValue(person.birthdate.getMonth(), 0)
assert.equalsValue(person.birthdate.getDate(), 21)
assert.equalsValue(person.birthdate.getHours(), 18)
assert.equalsValue(person.birthdate.getMinutes(), 4)
assert.equalsValue(person.country, 'Russia')
assert.equalsValue(person.height, 193)
assert.equalsValue(person.weight, 105)
assert.equalsValue(person.sex,'male')
assert.equalsValue(person.sleeping, false)
assert.equalsValue(person.eating, '')
assert.equalsValue(person.drinking,'')
assert.equalsValue(person.thirsty, false)
assert.equalsValue(person.hungry, false)
assert.equalsValue(person.sick, false)
assert.equalsValue(person.status,'living')
assert.equalsValue(person.energy, 100)
assert.equalsValue(person.rectum, 50)

assert.instanceOf(person, Person)
assert.instanceOf(person, Animal)

console.log('CASE METHOD SLEEP')

person.sleep()
assert.equalsValue(person.sleeping, true)

console.log('CASE METHOD AWAKE')

person.sleeping = true

person.awake()
assert.equalsValue(person.sleeping, false)

console.log('CASE METHOD EAT')

person.eat('sandwitch')
assert.equalsValue(person.eating, 'sandwitch')

console.log('CASE METHOD FAIL - EAT ON SLEEPING')

person.sleeping = true

var errorThrown 
try {
    person.eat('banana')
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'Error', 'try to eat on sleeping')

console.log('CASE METHOD DRINK')

person.drink('water')
assert.equalsValue(person.drinking, 'water')

console.log('CASE METHOD FAIL - DRINK ON SLEEPING')

person.sleeping = true

var errorThrown 
try {
    person.drink('vodka')
} catch (error) {
    errorThrown = error
}
assert.error(errorThrown, 'Error', 'try to drink on sleeping')

console.log('CASE METHOD DRUNK')

person.drunk('vodka', 'water')
assert.equalsValue(person.sobriety, 'sober')

console.log('CASE METHOD DRUNK')

person.drunk('vodka', 'water')
assert.equalsValue(person.sobriety, 'drunk')

console.log('CASE METHOD TALK')



console.log('CASE METHOD WALK')
console.log('CASE METHOD NOT WALK')
console.log('CASE METHOD WALK FAST')
console.log('CASE METHOD WALK SLOW')
console.log('CASE METHOD WALK VERY SLOW')
console.log('CASE METHOD WALK NORMAL')
console.log('CASE METHOD RUN')

