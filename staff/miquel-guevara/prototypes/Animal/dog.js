var Animal = require('./Animal')

function Dog(name, birthdate, country, weight) {
    this.name = name
    this.birthdate = birthdate
    this.country = country
    this.weight = weight
    this.sleeping = false
    this.eating = ''
    this.legsSpeed = Dog.NOT_WALK
}

Dog.NOT_WALK = 0
Dog.WALK_VERY_SLOW = 1
Dog.WALK_SLOW = 2
Dog.WALK_NORMAL = 4
Dog.WALK_FAST = 5
Dog.RUN = 6

Dog.prototype = new Animal



module.exports = Dog