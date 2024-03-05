function Animal(name, birthDate, weight, gender) {
    if (typeof name !== 'string') throw TypeError('name is not a string')
    if (!(birthDate instanceof Date)) throw TypeError('birthdate is not a Date')
    if (typeof weight !== 'number') throw TypeError('weight is not a number')
    this.name = name
    this.birthDate = birthDate
    this.weight = weight
    this.gender = gender
    this.sleeping = false
    this.eating = ''
    this.legsSpeed = Animal.NOT_WALK
    this.energy = 10
    this.age = 0
}

Animal.NOT_WALK = 0
Animal.WALK_SLOW = 2
Animal.WALK_NORMAL = 4
Animal.WALK_FAST = 6
Animal.WALK_VERY_FAST = 8


Animal.prototype.sleep = function () {
    this.legsSpeed = Animal.NOT_WALK
    this.sleeping = true
    this.energy = 10
}

Animal.prototype.wakeUp = function () {
    this.sleeping = false
}

Animal.prototype.walk = function (speed) {
    this.legsSpeed = speed
    if (speed === Animal.WALK_SLOW) {
        this.energy -= 1
    } else if (speed === Animal.WALK_FAST) {
        this.energy -= 3
    } else if (speed === Animal.WALK_VERY_FAST) {
        this.energy -= 4
    }
}

Animal.prototype.eat = function (food) {
    this.legsSpeed = Animal.NOT_WALK
    this.eating = food
    this.energy += 2
}

module.exports = Animal