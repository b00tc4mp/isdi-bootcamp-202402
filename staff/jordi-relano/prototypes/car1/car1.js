function Car(brand, model, year, color, doors, fuelType, transmission, gears, acceleration) {
    this.brand = brand
    this.model = model
    this.year = year
    this.color = color
    this.doors = doors
    this.fuelType = fuelType
    this.transmission = transmission
    this.gears = gears
    this.acceleration = acceleration

    this.direction = ''
    this.deposit = 0
    this.status = 'off'
    this.gear = 0
    this.speed = 0
    this.steering = 0
}

Car.prototype.fuel = function (load) {

    if (typeof load !== 'number') {
        throw new TypeError(load + ' is not a number')
    }
    else if (load === 0) {
        throw new TypeError(load + ' car doesnt works')

    } else if (load > 0) {
        throw new TypeError(load + ' car is working properly')

    } else if (load <= 50) {
        throw new TypeError(load + ' car has low fuel')
    } else if (load < 100 && load > 50) {
        throw new TypeError(load + ' car has enough fuel')
    } else if (load > 100) {
        throw new TypeError(load + ' the car is similar a bomb')
    }
    this.deposit = load

}

Car.prototype.start = function () {
    this.status = 'on'
}
Car.prototype.stop = function () {
    this.status = 'off'
}

Car.prototype.changeGear = function (gear) {

    if (typeof gear !== 'number') {
        throw new TypeError(gear + ' is not a number')
    } else if (gear > this.gears) {
        throw new RangeError('gear greater than ' +this.gears)


    } else if (gear === 0) {
        throw new TypeError(gears + ' please, put a gear btw 0 and 7, or move it with your hands')
    } else if(gear === -1){
        throw new TypeError(gear + ' car is going backward')
    } else if( gear > 0 && gear < gears+1 ){
        throw new TypeError(gear + ' car is going backward')

    }
    this.gear = gear
}

Car.prototype.speedUp = function (acceleration) {
    if (typeof acceleration !== 'number') {
        throw new TypeError(acceleration + ' is not a number')
    }
    else if (acceleration > 0) 
        if(this.gear > 0)
            this.direction = 'forward'
        else
            this.direction = 'backward'
    }
    this.acceleration = acceleration


Car.prototype.changeSteering = function (steering) {
    if (typeof steering !== 'number') {
        throw new TypeError(steering + ' is not a number')
    }
    else if (steering > 0) {
        this.steering = 'steering is increasing'
        this.direction = 'forward-right' + 'direction is forward and right'
    }
    else if (steering < 0) {
        this.steering = 'steering is decreasing'
        this.direction = 'backward-left', 'direction is backward and left'
    }
    this.steering = steering
}





module.exports = Car

