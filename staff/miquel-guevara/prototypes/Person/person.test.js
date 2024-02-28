var Person = require('./person')

console.log('TEST Person')

console.log('CASE constructor')

var person = new Person('Willie', 'Tanner', 185, 70, 80, 'thin', 'white', 'blue', 'omnivore')

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
console.assert(person.biologic === '', 'who knows')
console.assert(person.maxspeed === 10, 'max speed is 10')
console.assert(person.maxJump === 10, 'max jump is 10')
console.assert(person.maxlife === 110, 'max life is 110')

console.log('CASE jump method')

var person = new Person('Willie', 'Tanner', 185, 70, 80, 'thin', 'white', 'blue', 'omnivore')

person.jumpUp(10)

console.assert(person.jump === 10, 'jump 10 cm for the floor')
console.assert(person.direction === 'up', 'direction is up')


person.crouch(-10)

console.assert(person.jump === -10, 'crouch from the ground')
console.assert(person.direction === 'down', 'direction is down')


console.log('CASE kind of food')

var person = new Person('Willie', 'Tanner', 185, 70, 80, 'thin', 'white', 'blue', 'omnivore')

person.foodPreference('omnivore')

console.assert(person.favoriteFood === 'omnivore', 'omnivore is your preference')


console.log('CASE life')

var person = new Person('Willie', 'Tanner', 185, 70, 80, 'thin', 'white', 'blue', 'omnivore')

person.life(80)

console.assert(person.biologic === 'alive', 'person is alive')

person.life(110)

console.assert(person.biologic === 'dead', 'person is alive')


console.log('CASE method walk')

var person = new Person('Willie', 'Tanner', 185, 70, 80, 'thin', 'white', 'blue', 'omnivore')

person.walking(0)

console.assert(person.stopped === 0, 'still person')

person.walking(1)

console.assert(person.speed === 1, 'walking level 1')

person.walking(4)

console.assert(person.speed === 4, 'maxspeed')

person.walking(-1)

console.assert(person.speed === -1, 'walk backwards')

try {
    person.walking(5)
} catch (error) {
    console.assert(error.name, 'RangeError')

    console.assert(error.message, 'running speed')
}


console.log('CASE method dance')

var person = new Person('Willie', 'Tanner', 5)

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