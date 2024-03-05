function Animal(name, specie, birthdate, country, height, weight, sex){
    this.name = name
    this.specie = specie
    this.birthdate = birthdate
    this.country = country
    this.height = height
    this.weight = weight
    this.sex = sex
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
    this.legsSpeed = Animal.NOT_WALK
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
    if(this.sleeping) throw new Error('try to eat on sleeping')

    this.eating = food

}

Animal.prototype.drink = function (liquid) {
    if(this.sleeping) throw new Error ('try to drink on sleeping')

    this.drinking = liquid
}

Animal.prototype.die = function () {
    if (this.thirsty === true && this.hungry === true && this.sick === true) {
        this.status = 'dead'
    }
}

Animal.prototype.defecate = function(){
    if(typeof this.rectum !== 'number') throw new TypeError('is not a number')
    
    if (this.rectum > 70) {
        this.rectum = 0
    } else{
        this.rectum 
    }
}

Animal.prototype.getEnergy = function (food) {
    
    for (var i = 0; i < arguments.length; i++) {
        
        if(typeof arguments[i] !== 'string') throw new TypeError('is not a string')
        
        this.energy = this.energy + 10
    }
}

Animal.prototype.moveLegs = function (speed) {
    this.legsSpeed = speed === undefined ? 4 : speed
}

Animal.prototype.toString = function () {
    return Animal.name + ' (' + this.name + ')'
}

Animal.prototype.piss = function () {
    if(typeof this.bladder !== 'number') throw new TypeError('is not a number')

    if (this.bladder >= 70) {
        this.bladder = 0
    } else{
        this.bladder 
    }
}
module.exports = Animal
