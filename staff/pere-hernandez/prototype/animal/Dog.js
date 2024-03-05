var Pet = require('./Pet')

function Dog(birthday, weight, height, legs, name, owner, breed){
    Pet.call(this, birthday, weight, height, legs, name, owner)

    if (typeof breed !== 'string')
        throw new TypeError(breed + ' is not a string')

    this.breed = breed
}

Dog.prototype = Object.create(Pet.prototype)
Dog.prototype.constructor = Dog

Dog.prototype.bark = function(){
    if (this.alive === false)
        throw new Error ('tries to bark on alive false')
    if (this.awake === false)
        throw new Error ('tries to bark on awake false')

    this.silent = false
    this.message = 'Woof, woof'
}

Dog.prototype.showChancla = function(){
    if (this.alive === false)
        throw new Error ('tries to showChancla on alive false')
    if (this.awake === false)
        throw new Error ('tries to showChancla on awake false')

    this.silent = true
    this.message = ''
}



module.exports = Dog