var Animal = require('./animal')

function Person(name, surname, specie, birthdate, country, height, weight, sex){

    if (typeof name !== 'string') throw new TypeError ('name is not a string')
    if (typeof surname !== 'string') throw new TypeError ('surname is not a string')
    if(typeof specie !== 'string') throw new TypeError ('specie is not a string')
    if(!(birthdate instanceof Date)) throw new TypeError ('birthdate is not a Date')
    if(typeof country !== 'string') throw new TypeError ('country is not a string')
    if(typeof weight !== 'number') throw new TypeError ('weight ir not a number')
    if(typeof height !== 'number') throw new TypeError ('height ir not a number')
    if (typeof sex !== 'string') throw new TypeError ('sex is not a string')
    
    this.surname = surname
    Animal.call(this, name, specie, birthdate, country, height, weight, sex)

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
    this.legsSpeed = Person.NOT_WALK
    this.talking = false
    this.sobriety = 'sober'
}

Person.NOT_WALK = 0
Person.WALK_VERY_SLOW = 1
Person.WALK_SLOW = 2
Person.WALK_NORMAL = 4
Person.WALK_FAST = 5
Person.RUN = 6


Person.prototype.moveLegs = function (speed) {
    this.legsSpeed = speed === undefined ? 4 : speed
}

Person.prototype.drunk = function (drink) {
    if(drink === 'vodka'){
        this.sobriety = 'drunk'
    } else if(drink === 'water'){
        this.sobriety = 'sober'
    }
}

Person.prototype.talk = function(){
    this.talking = true
}

Person.prototype.shout = function () {
    this.talking = false
}


Person.prototype = Object.create(Animal.prototype)
Person.prototype.constructor = Person


module.exports = Person 