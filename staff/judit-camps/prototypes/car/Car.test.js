var Car = require('./Car')

console.log('TEST Car')

console.log('CASE constructor')

var car = new Car('Ferrari', 'Testarossa', 1990, 'red', 3, 'gasoline', 'manual', 6)

console.assert(car.brand === 'Ferrari', 'brand is Ferrari')
console.assert(car.model === 'Testarossa', 'brand is Testarossa')
console.assert(car.status === 'off', 'is off')
console.assert(car.deposit === 0, 'deposit is 0')
console.assert(car.year === 1990, 'year is 1990')
console.assert(car.color === 'red', 'color is red')
console.assert(car.doors === 3, 'doors is 3')
console.assert(car.fuelType === 'gasoline', 'fuel type is gasoline')
console.assert(car.transmission === 'manual', 'transmission is manual')
console.assert(car.gears === 6, 'gears is 6')
console.assert(car.gear === 0, 'gear is 0')
console.assert(car.speed === 0, 'speed is 0')
console.assert(car.acceleration === 0, 'acceleration is 0')
console.assert(car.direction === '', 'direction is empty')
console.assert(car.steering === 0, 'brand is 0')


console.log('CASE method fuel')
var car = new Car('Ford', 'Fiesta')
car.fuel(80)
console.assert(car.deposit === 80, 'deposit is at 80%')


console.log('CASE method start')
var car = new Car('Citroen', 'CV')
car.start()
console.assert(car.status === 'on', 'status is on')


console.log('CASE method stop')
var car = new Car('Citroen', 'CV')
car.stop()
console.assert(car.status === 'off', 'status is off')


console.log('CASE method changeGear to 1')
var car = new Car('Citroen', 'CV', 1960, 'red', 5, 'gasoline', 'manual', 4)
car.changeGear(1)
console.assert(car.gear === 1, 'gear is 1')

console.log('CASE method changeGear to 2')
car.changeGear(2)
console.assert(car.gear === 2, 'gear is 2')

console.log('CASE method changeGear to 5 when gears are 4 (fail)')
var errorThrown
try {
    car.changeGear(5)
} catch (error) {
    errorThrown = error
}
console.assert(errorThrown.name === 'RangeError', 'name')
console.assert(errorThrown.message === 'gear greater than 4', 'message')

car.changeGear(-1)
console.assert(car.gear === -1, 'gear is -1')


console.log('CASE method speedUp to 20 when gear is 1')
var car = new Car('Citroen', 'CV')
car.gear = 1
car.speedUp(20)
console.assert(car.acceleration === 20, 'acceleration is at 20')
console.assert(car.direction === 'forward', 'direction is forward')


console.log('CASE method speedUp to 90 when gear is 0')
var car = new Car('Citroen', 'CV')
car.gear = 0
car.speedUp(90)
console.assert(car.acceleration === 90, 'acceleration is at 90')
console.assert(car.direction === '', 'direction is empty')


console.log('CASE method speedUp to 100 when gear is -1')
car.gear = -1
car.speedUp(100)
console.assert(car.acceleration === 100, 'acceleration is at 100')
console.assert(car.direction === 'backward', 'direction is backward')


console.log('CASE method turnSteering to 20 when gear is 1 and acceleration is 10')
var car = new Car('Citroen', 'CV')
car.gear = 1
car.acceleration = 10
car.changeSteering(20)
console.assert(car.steering === 20, 'steering is at 20')
console.assert(car.direction === 'forward-right', 'direction is forward and right')


console.log('CASE method turnSteering to -30 when gear is -1 and acceleration is 10')
car.gear = -1
car.acceleration = 10
car.changeSteering(-30)
console.assert(car.steering === -30, 'steering is at -30')
console.assert(car.direction === 'backward-left', 'direction is backwards and left')


console.log('CASE method turnSteering to -40 with gear 3 and acceleration at 50')
car.gear = 3
car.acceleration = 50
car.changeSteering(-40)
console.assert(car.steering === -40, 'steering is at -40')
console.assert(car.direction === 'forward-left', 'direction is forward and left')


console.log('CASE method turnSteering to 30 with gear -1 and acceleration is 20')
car.gear = -1
car.acceleration = 20
car.changeSteering(30)
console.assert(car.steering === 30, 'steering is at 30')
console.assert(car.direction === 'backward-right', 'direction is backward and right')


console.log('CASE method turnSteering 0 with gear -1 and acceleration is 20')
car.gear = -1
car.acceleration = 20
car.changeSteering(0)
console.assert(car.steering === 0, 'steering is at 0')
console.assert(car.direction === 'backward', 'direction is backward')


console.log('CASE method turnSteering 0 with gear 2 and acceleration is 30')
car.gear = 2
car.acceleration = 30
car.changeSteering(0)
console.assert(car.steering === 0, 'steering is at 0')
console.assert(car.direction === 'forward', 'direction is forward')
