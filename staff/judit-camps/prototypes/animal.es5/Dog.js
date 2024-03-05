var Pet = require('./Pet')

function Dog(owner, name, birthDate, weight, gender) {
    Pet.call(this, owner, name, birthDate, weight, gender)

    this.talking = false
    this.say = ''
}

Dog.prototype = Object.create(Pet.prototype)
Dog.prototype.constructor = Dog

Dog.NOT_WALK = 0
Dog.WALK_SLOW = 2
Dog.WALK_NORMAL = 4
Dog.WALK_FAST = 6
Dog.WALK_VERY_FAST = 8

Dog.prototype.bark = function () {
    if (this.sleeping === false) {
        this.say = 'woof woof'
        this.talking = true

    } else if (this.gender === 'M') this.say = "Shhh... He's sleeping"
    else this.say = "Shhh... She's sleeping"
}

Dog.prototype.shutUp = function () {
    this.say = ''
    this.talking = false
}

module.exports = Dog