var Animal = require ('./Animal')

function Person (name, surname, birthday, height, weight, legs, sex, skinTone, eyeColor, hairColor){
    Animal.call(this, birthday, height, weight, legs)

    if (typeof name !== 'string')
        throw new TypeError(name + ' is not a string')

    this.name = name
    this.surname = surname
    this.sex = sex
    this.skinTone = skinTone
    this.eyeColor = eyeColor
    this.hairColor = hairColor
    
}

Person.prototype = Object.create(Animal.prototype)
Person.prototype.constructor = Person

Person.prototype.speak = function(string){
    if (string instanceof String !== false)
        throw new TypeError(string + ' is not a String')
    this.silent = false
    this.message = string
}

Person.prototype.stopTalking = function(){
    this.silent = true
    this.message = ''
}


module.exports = Person