function Car(brand, model, year, color, doors, fuelType, transmission, gears) {
    this.brand = brand
    this.model = model
    this.year = year
    this.color = color
    this.doors = doors
    this.fuelType = fuelType
    this.transmission = transmission
    this.gears = gears
    this.deposit = 0
    this.status = 'off'
    this.gear = 0
    this.speed = 0
    this.acceleration = 0
    this.direction = ''
    this.steering = 0
}

Car.prototype.fuel = function (amount) {
    this.deposit = amount
}

Car.prototype.start = function () {
    this.status = 'on'
}

Car.prototype.stop = function () {
    this.status = 'off'
}

Car.prototype.changeGear = function (gear) {
    if (gear > this.gears) {
        throw new RangeError('gear greater than ' + this.gears)
    }
    if (gear < -1) {
        throw new RangeError('gear must be between -1 and ' + this.gears)
    }
    this.gear = gear

    if (this.gear > 0) {
        this.direction = 'forward'
    } else if (this.gear < 0) {
        this.direction = 'backward'
    }
}

Car.prototype.speedUp = function (value) {
    this.acceleration = value
    this.speed = value
    if (this.gear > 0) {
        this.direction = 'forward'
    } else if (this.gear < 0) {
        this.direction = 'backward'
    }
}

Car.prototype.changeSteering = function (rotation) {
    this.steering = rotation
    if (this.direction === 'forward' || this.gear > 0) {
        if (this.steering > 0) {
            this.direction = 'forward-right'
        }
        else if (this.steering < 0) {
            this.direction = 'forward-left'
        } else this.direction = 'forward'
    }
    if (this.direction === 'backward' || this.gear === -1) {
        if (this.steering > 0) {
            this.direction = 'backward-right'
        }
        else if (this.steering < 0) {
            this.direction = 'backward-left'
        }
        else this.direction = 'backward'
    }
}

module.exports = Car

