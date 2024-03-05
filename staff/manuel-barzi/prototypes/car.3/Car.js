function Car(brand, model, year, color, doors, fuelType, transmission, gears) {
    this.brand = brand
    this.model = model
    this.year = year
    this.color = color
    this.doors = doors
    this.fuelType = fuelType
    this.transmission = transmission
    this.gears = gears
    this.status = 'off'
    this.deposit = 0
    this.gear = 0
    this.speed = 0
    this.acceleration = 0
    this.direction = ''
    this.steering = 0
}

Car.prototype.fuel = function (load) {
    this.deposit = load
}

Car.prototype.start = function () {
    this.status = 'on'
}

Car.prototype.stop = function () {
    this.status = 'off'
}

Car.prototype.changeGear = function (gear) {
    if (gear > this.gears) throw new RangeError('gear greater than ' + this.gears)

    this.gear = gear
}

Car.prototype.speedUp = function (acceleration) {
    this.acceleration = acceleration

    if (this.acceleration > 0)
        if (this.gear > 0)
            this.direction = 'forward'
        else if (this.gear < 0)
            this.direction = 'backward'
        else
            this.direction = ''
}

Car.prototype.changeSteering = function (steering) {
    this.steering = steering

    if (this.acceleration > 0)
        if (this.gear > 0) {
            if (this.steering > 0)
                this.direction = 'forward-right'
        } else if (this.gear < 0)
            if (this.steering < 0)
                this.direction = 'backward-left'

}

module.exports = Car