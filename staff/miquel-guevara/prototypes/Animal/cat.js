var Animal = require('./Animal')

function Cat(name, age, country, weight) {
    this.name = name
    this.age = age
    this.country = country
    this.weight = weight
    this.sleeping = false
    this.eating = ''
    this.legsSpeed = Cat.NOT_WALK
}

Cat.NOT_WALK = 0
Cat.WALK_VERY_SLOW = 1
Cat.WALK_SLOW = 2
Cat.WALK_NORMAL = 4
Cat.WALK_FAST = 5
Cat.RUN = 6

Cat.prototype = new Animal



module.exports = Cat