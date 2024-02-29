function Car(brand, model, year, color, doors, fuelType, transmission, maxGears) {
    this.brand = brand
    this.model = model
    this.year = year
    this.color = color
    this.doors = doors
    this.fuelType = fuelType
    this.transmission = transmission
    this.maxGears = maxGears
    this.gear = 0
    this.status = 'off'
    this.deposit = 0
    this.speed = 0
    this.acceleration = 0
    this.direction = ''
    this.steering = 0
}

Car.prototype.fuel = function(load){
    this.deposit = load
}

Car.prototype.start = function(){
    this.status = 'on'
}

Car.prototype.stop = function() {
    this.status = 'off'
}

Car.prototype.changeGear = function(gear){
    
    if (gear > this.maxGears) {
        throw new RangeError ('gear greater than' + this.maxGears)
    } else {
        this.gear = gear
    }
} 

Car.prototype.speedUp = function (acceleration, gear) {
    this.acceleration = acceleration
    this.gear = gear

    if (acceleration > 0 && gear >= 1) {
        this.direction = 'forward'
    } else if (acceleration === 0 && gear === 0){
        this.direction = 'not move'
    } else if (acceleration > 0 && gear === -1){
        this.direction = 'backward'
    }
}

Car.prototype.changeSteering = function (steering, acceleration, gear) {
    this.acceleration = acceleration
    this.steering = steering

    if (steering > 0 && gear > 0) {
        this.direction = 'forward-right'  
    } else if (steering < 0 && gear === -1){
        this.direction = 'backward-left' 
    } else if (steering > 0 && gear === -1){
        this.direction = 'forward-left'
    } else if (steering < 0 && gear > 0){
        this.direction = 'backward-left'
    }
}



module.exports = Car