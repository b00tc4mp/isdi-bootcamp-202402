function Transport(brand, model, year) {
    this.brand = brand
    this.model = model
    this.year = year
    this.moving = false
}

Transport.prototype.move = function () { this.moving = true }
Transport.prototype.stop = function () { this.moving = false }

var bike = new Transport('Decathlon', 'Hyper Speed', 2024)

function Car(brand, model, year, color) {
    Transport.call(brand, model, year)

    this.color = color
    this.on = false
}

Car.prototype = Object.create(Transport.prototype)
Car.prototype.constructor = Car

Car.prototype.start = function () { this.on = true }
Car.prototype.stop = function () { this.on = false; this.moving = false }

var lambo = new Car('Lamborghini', 'Countach', 1990, 'red')
