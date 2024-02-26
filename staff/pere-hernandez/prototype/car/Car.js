function Car (brand, model, year, color, doors, combustion, transmission, maxGears){
    this.brand = brand
    this.model = model
    this.year = year
    this.color = color
    this.doors = doors
    this.combustion = combustion
    this.transmission = transmission
    this.maxGears = maxGears
    this.status = 'off'
    this.deposit = 0
    this.currentGear = 0
    this.direction = 'none'
    this.steerDirection = 0
    this.speed = 0
}


Car.prototype.fuel = function(load) {
    if (typeof load !== 'number')
        throw new TypeError(load + ' is not a number')
    if (load < 0 || load > 100)
        throw new RangeError(load + ' is more than 100 or less than 0')

    this.deposit = load
}


Car.prototype.start = function(){
    this.status = 'on'
}


Car.prototype.stop = function(){
    this.status = 'off'
    this.direction = 'none'
}


Car.prototype.changeGear = function(gear){
    if (!Number.isInteger(gear))
        throw new TypeError(gear + ' is not an Integer')
    if (gear < -1 || gear > this.maxGears)
        throw new RangeError('This gear does not exist')

    this.currentGear = gear

    if (gear < 0)
        this.direction = 'backward'
    else if (gear === 0)
        this.direction = 'none'
    else
        this.direction = 'forward'
}


Car.prototype.steerWheel = function(degrees){
    if (typeof degrees !== 'number')
        throw new TypeError(degrees + ' is not a number')
    if (degrees < -90 || degrees > 90)
        throw new RangeError('You can only steer from -180º to 180º')

    this.steerDirection = degrees
}


Car.prototype.speedUp = function(speed){
    if (this.status === 'off')
        throw new Error('Your car is turned off')
    if (typeof speed !== 'number')
        throw new TypeError(speed + ' is not a number')
    if (speed < 1 || speed > 120)
        throw new RangeError('The speed can only be from 1 to 120')

    this.speed = speed
}


module.exports = Car