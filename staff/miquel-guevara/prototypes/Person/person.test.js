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

var person = new Person('Willie', 'Tanner', 4)

person.walking(0)

console.assert(person.stopped === 0, 'still person')

car.walking(1)

console.assert(person.speed === 1, 'walking level 1')

try {
    person.walking(5)
} catch (error) {
    console.assert(error.name, 'RangeError')
    console.assert(error.message, 'running speed')
}

person.walking(-1)

console.assert(person.walking === -1, 'walk backwards')

console.log('CASE jump method')

var person = new Person('Willie', 'Tanner', 40)

person.speed = 10

person.jumpUp(10)

console.assert(person.jump === 10, 'jump 10 cm for the floor')
console.assert(car.direction === 'up', 'direction is up')

car.speed = -10

person.jumpUp(10)

console.assert(person.jump === 10, 'crouch 10 cm from the ground')
console.assert(car.direction === 'down', 'direction is down')

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