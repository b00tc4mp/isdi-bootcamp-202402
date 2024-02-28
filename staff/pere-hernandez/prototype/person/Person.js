function Person (name, surname, height, weight, age, sex, skinTone, eyeColor, hairColor){
    this.name = name
    this.surname = surname
    this.height = height
    this.weight = weight
    this.age = age
    this.sex = sex
    this.skinTone = skinTone
    this.eyeColor = eyeColor
    this.hairColor = hairColor
    this.speed = 0
    this.silent = true
    this.message = ''
    this.alive = true
}


Person.prototype.walk = function(){
    this.speed = 4
}

Person.prototype.run = function(){
    this.speed = 9
}

Person.prototype.stopMoving = function(){
    this.speed = 0
}

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

Person.prototype.die = function(){
    this.alive === false
}


module.exports = Person