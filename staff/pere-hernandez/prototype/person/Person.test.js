var Person = require('./Person')

let person = new Person('Eufrasio', 'Papadopoulos', 2.07, 54.5, 73, 'male', 'pale', 'green', 'pink')

console.log('CASE constructor')

console.assert(person.name === 'Eufrasio')
console.assert(person.surname === 'Papadopoulos')
console.assert(person.height === 2.07)
console.assert(person.weight === 54.5)
console.assert(person.age === 73)
console.assert(person.sex === 'male')
console.assert(person.skinTone === 'pale')
console.assert(person.eyeColor === 'green')
console.assert(person.hairColor === 'pink')
console.assert(person.speed === 0, 'speed')
console.assert(person.silent === true, 'is silent')
console.assert(person.message === '', 'is saying nothing')
console.assert(person.alive === true, 'is alive')


console.log('CASE walk()')

person.walk()
console.assert(person.speed === 4, 'speed on walk')


console.log('CASE run()')

person.run()
console.assert(person.speed === 9, 'speed on run')


console.log('CASE stopMoving()')

person.stopMoving()
console.assert(person.speed === 0, 'speed on stop moving')


console.log('CASE speak()')

var str = 'I am talking now'
person.speak(str)
console.assert(person.silent === false, 'is not silent')
console.assert(person.message === 'I am talking now', 'person is saying str')

var num = 123
try {
    person.speak(num)
} catch (error){
    console.assert(error.name === 'TypeError', 'error name on not a str')
    console.assert(error.message === '123 is not a String', 'error message on not a str')
}



console.log('CASE stopTalking()')

person.stopTalking()
console.assert(person.silent === true, 'is silent')
console.assert(person.message === '', 'no message')



console.log('CASE die()')

person.die()
console.assert(person.alive === false)