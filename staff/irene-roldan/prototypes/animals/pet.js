var Animal = require('./animal')
var Person = require('./person')

function Pet(owner, name, specie, birthdate, country, height, weight, sex) {

    this.owner = owner
    Animal.call(this, name, specie, birthdate, country, height, weight, sex)
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
    this.legsSpeed = Pet.NOT_WALK
    this.talking = false
    this.sobriety = 'sober'
}

Pet.prototype = Object.create(Animal.prototype)
Pet.prototype.constructor = Pet

/*
Pet.prototype.toString = function () {
    return Pet.name + ' (' + this.name + ', ' + this.birthdate.toLocaleDateString('en-CA') + ', ' + this.country + ')'
}
*/
Pet.NOT_WALK = 0
Pet.WALK_VERY_SLOW = 1
Pet.WALK_SLOW = 2
Pet.WALK_NORMAL = 4
Pet.WALK_FAST = 5
Pet.RUN = 6

Pet.prototype.sound = function (sound) {
    if(sound === '¡oinc, oinc!')
        this.talking = true
}

Pet.prototype.shutUp = function (sound) {
    if(sound === 'shh')
        this.talking = false
}


module.exports = Pet