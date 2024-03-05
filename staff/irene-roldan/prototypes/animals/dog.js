var Pet = require('./pet')
var Person = require('./person')

function Dog(owner, name, specie, birthdate, country, height, weight, sex) {
    if (typeof name !== 'string') throw new TypeError ('name is not a string')
    if(typeof specie !== 'string') throw new TypeError ('specie is not a string')
    if(!(birthdate instanceof Date)) throw new TypeError ('birthdate is not a Date')
    if(typeof country !== 'string') throw new TypeError ('country is not a string')
    if(typeof weight !== 'number') throw new TypeError ('weight ir not a number')
    if(typeof height !== 'number') throw new TypeError ('height ir not a number')
    if (typeof sex !== 'string') throw new TypeError ('sex is not a string')
    /*
    if (!(owner instanceof Person)) throw new TypeError('owner is not a Person')
    this.birthdate = birthdate instanceof Date ? birthdate : new Date();
    */

    Pet.call(this, owner, name, specie, birthdate, country, height, weight, sex)
    
    this.talking = false
    this.sleeping = false
    this.eating = ''
    this.drinking = ''
    this.thirsty = false
    this.hungry = false
    this.sick = false
    this.status = 'living'
    this.energy = 100
    this.rectum = 50
    this.bladder = 50
    this.legsSpeed = Dog.NOT_WALK
    this.talking = false
    this.state = false

}

Dog.NOT_WALK = 0
Dog.WALK_VERY_SLOW = 1
Dog.WALK_SLOW = 2
Dog.WALK_NORMAL = 4
Dog.WALK_FAST = 5
Dog.RUN = 6

Dog.prototype = Object.create(Pet.prototype)
Dog.prototype.constructor = Dog
module.exports = Dog

Dog.prototype.watchOver = function (danger) {
    if(danger === 'thieves')
        this.talking = true
}

