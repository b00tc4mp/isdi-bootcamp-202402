var Car = require('./Car')

console.log('TEST Car')



console.log('CASE constructor')

var car = new Car('Opel', 'Corsa', 1993, 'white', 5, 'gasoline', 'manual', 5)

console.assert(car.brand === 'Opel', 'brand')
console.assert(car.model === 'Corsa', 'model')
console.assert(car.year === 1993, 'year')
console.assert(car.color === 'white', 'color')
console.assert(car.doors === 5, 'doors')
console.assert(car.combustion === 'gasoline', 'combustion')
console.assert(car.transmission === 'manual', 'transmission')
console.assert(car.maxGears === 5, 'maxGears')
console.assert(car.status === 'off', 'status')
console.assert(car.deposit === 0, 'deposit')
console.assert(car.currentGear === 0, 'current gear')
console.assert(car.direction === 'none', 'direction')
console.assert(car.steerDirection === 0, 'steering direction')
console.assert(car.speed === 0, 'speed')



console.log('CASE method fuel()')

car.fuel(75)
console.assert(car.deposit === 75, 'fuel quantity')

try{
    car.fuel('Dale más gasolina')
} catch (error){
    console.assert(error.name === 'TypeError', 'error name if no number')
    console.assert(error.message === 'Dale más gasolina is not a number', 'error message if no number')
}

try{
    car.fuel(1254)
} catch (error){
    console.assert(error.name === 'RangeError', 'error name if out of range')
    console.assert(error.message === '1254 is more than 100 or less than 0', 'error message ir out of range')
}



console.log('CASE method start()')

car.start()
console.assert(car.status === 'on', 'car is ignited')



console.log('CASE method stop()')

car.stop()
console.assert(car.status === 'off', 'car is turned off')
console.assert(car.direction === 'none', 'direction')



console.log('CASE changeGear()')

car.changeGear(1)
console.assert(car.currentGear === 1, 'current gear')
console.assert(car.direction === 'forward', 'direction')

car.changeGear(-1)
console.assert(car.currentGear === -1, 'current gear')
console.assert(car.direction === 'backward', 'direction')

car.changeGear(0)
console.assert(car.currentGear === 0, 'current gear')
console.assert(car.direction === 'none', 'direction')

try {
    car.changeGear('Yo quiero marcha, marcha')
} catch (error){
    console.assert(error.name === 'TypeError', 'error name if no Integer')
    console.assert(error.message === 'Yo quiero marcha, marcha is not an Integer', 'error message if no Integer')
}

try {
    car.changeGear(8)
} catch (error){
    console.assert(error.name === 'RangeError', 'error name if out of range')
    console.assert(error.message === 'This gear does not exist', 'error message if out of range') 
}



console.log('CASE steerWheel()')

car.steerWheel(45)
console.assert(car.steerDirection === 45, 'steer direction')

try {
    car.steerWheel(360)
} catch (error){
    console.assert(error.name === 'RangeError', 'name error on out of range')
    console.assert(error.message === 'You can only steer from -90º to 90', 'message error on out of range')
}

try {
    car.steerWheel('Volantazo')
} catch (error) {
    console.assert(error.name === 'TypeError', 'name error on not a number')
    console.assert(error.message === 'Volantazo is not a number', 'message error on not a number')
}



console.log('CASE speedUp()')

car.start()
car.speedUp(50)
console.assert(car.speed === 50, 'speed')

try {
    car.speedUp('Atropella a Pepito')
} catch (error) {
    console.assert(error.name === 'TypeError', 'error name on not a number')
    console.assert(error.message === 'Atropella a Pepito is not a number', 'error message on not a number')
}

try {
    car.speedUp(200)
} catch (error) {
    console.assert(error.name === 'RangeError', 'error name on out of range')
    console.assert(error.message === 'The speed can only be from 1 to 120')
}

car.stop()
try {
    car.speedUp(30)
} catch (error) {
    console.assert(error.name === 'Error', 'error name on car turned off')
    console.assert(error.message === 'Your car is turned off', 'error message on car turned off')
}