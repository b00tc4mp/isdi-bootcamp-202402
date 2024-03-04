var Pet = require('./pet')
var Person = require('./person')

function Cat(owner, name, specie, birthdate, country, height, weight, sex){

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
    this.legsSpeed = Cat.NOT_WALK
    this.talking = false
    this.situation = ''
    this.boring = false
}

Cat.NOT_WALK = 0
Cat.WALK_VERY_SLOW = 1
Cat.WALK_SLOW = 2
Cat.WALK_NORMAL = 4
Cat.WALK_FAST = 5
Cat.RUN = 6

Cat.prototype = Object.create(Pet.prototype)
Cat.prototype.constructor = Cat


Pet.prototype.toString = function () {
    return Pet.name + ' (' + this.name + ', ' + this.birthdate.toLocaleDateString('en-CA') + ', ' + this.country + ')'
}


Cat.prototype.sound = function (sound) {
    if(sound === '¡Miau!')
        this.talking = true
}

Cat.prototype.shutUp = function (sound) {
    if(sound === 'shh')
        this.talking = false
}

Cat.prototype.escape = function () {
    
    if( this.boring === true){
        this.situation = 'out of home'
    } else if(this.boring === false){
        this.situation = 'home'
    } 
}

module.exports = Cat