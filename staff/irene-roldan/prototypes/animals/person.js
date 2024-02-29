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
    this.legsSpeed = Animal.NOT_WALK
    this.talking = false
    this.sobriety = 'sober'
}

Animal.NOT_WALK = 0
Animal.WALK_VERY_SLOW = 1
Animal.WALK_SLOW = 2
Animal.WALK_NORMAL = 4
Animal.WALK_FAST = 5
Animal.RUN = 6

Animal.prototype.sleep = function () {
    this.sleeping = true
}

Animal.prototype.awake = function () {
    this.sleeping = false
}

Animal.prototype.eat = function (food) {
    if(this.sleeping === true) throw new Error('try to eat on sleeping')

    this.eating = food

}

Animal.prototype.drink = function (liquid) {
    if(this.sleeping === true) throw new Error ('try to drink on sleeping')

    this.drinking = liquid
}


Animal.prototype.die = function () {
    if (this.thirsty === true && this.hungry === true && this.sick === true) {
        this.status = 'dead'
    }
}

Animal.prototype.defecate = function(){
    if(typeof this.rectum !== 'number') throw new TypeError(this.rectum + 'is not a number.')
    
    if (this.rectum > 70) {
        this.rectum = 0
    } else{
        this.rectum 
    }
}

Animal.prototype.getEnergy = function (food) {
    
    for (var i = 0; i < arguments.length; i++) {
        
        if(typeof arguments[i] !== 'string') throw new TypeError(arguments[i] + 'is not a string.')
        
        this.energy = this.energy + 10
    }
}

Animal.prototype.moveLegs = function (speed) {
    this.legsSpeed = speed === undefined ? 4 : speed
}

Animal.prototype.drunk = function (drink, drink2) {
    if(drink){
        this.sobriety = 'sober'
    } else if(drink2){
        this.sobriety = 'drunk'
    }
}


Person.prototype = Object.create(Animal.prototype)
Person.prototype.constructor = Person


module.exports = Person 