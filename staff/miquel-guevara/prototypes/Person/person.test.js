var Person = require('./person')

console.log('TEST Person')

console.log('CASE aparence')

var person = new Person('Willie', 'Tanner', 185, 70, 50, 'thin', 'white', 'blue', 'omnivore')

//nombre, apellido, altura, peso, edad, complexion, color piel, color de ojos, alimentacion

console.assert(person.name === 'Willie', 'name is Willie')
console.assert(person.lastname === 'Tanner', 'lastname is Tanner')
console.assert(person.height === 185, 'height is 185')
console.assert(person.weight === 70, 'weight is 70')
console.assert(person.age === 80, 'age is 80')
console.assert(person.complexion === 'thin', 'complexion is thin')
console.assert(person.skinColor === 'white', 'skin color white ')
console.assert(person.eyesColor === 'blue', 'eyes color')
console.assert(person.favoriteFood === 'omnivore', 'is omnivore')
console.assert(person.status === '', 'who knows')

console.log('CASE kind of food')

var person = new Person('Willie', 'Tanner')

person.foodPreference(omnivore)

console.assert(person.favoriteFood === 'omnivore', 'omnivore is your preference')

console.log('CASE life')

var person = new Person('Willie', 'Tanner')

person.life(50)

console.assert(person.status === 'alive', 'person is alive')

person.life(110)

console.assert(car.status === 'dead', 'person is alive')

console.log('CASE method walk')

var person = new Person('Willie', 'Tanner')

person.walking(1)

console.assert(person.stopped === 1, 'walking level 1')

car.walking(4)

console.assert(car.stopped === 4, 'running fast')

try {
    person.walking(5)
} catch (error) {
    console.assert(error.name, 'RangeError')
    console.assert(error.message, 'gear greater than the given gear')
}

car.changeGear(-1)

console.assert(car.gear === -1, 'gear is -1')

console.log('CASE method speedUp')

var car = new Car('Citroen', 'CV')

car.gear = 1

car.speedUp(20)

console.assert(car.acceleration === 20, 'acceleration is at 20')
console.assert(car.direction === 'forward', 'direction is forward')

car.gear = -1

car.speedUp(100)

console.assert(car.acceleration === 100, 'acceleration is at 100')
console.assert(car.direction === 'backward', 'direction is backward')

console.log('CASE method turnSteering')

var car = new Car('Citroen', 'CV')

car.gear = 1
car.acceleration = 10

car.changeSteering(20)

console.assert(car.steering === 20, 'steering is at 20')
console.assert(car.direction === 'forward-right', 'direction is forward and right')

car.gear = -1
car.acceleration = 10

car.changeSteering(-30)

console.assert(car.steering === -30, 'steering is at -30')
console.assert(car.direction === 'backward-left', 'direction is backward and left')