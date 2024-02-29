var Pet = require ('./Pet')

function Cat (birthday, weight, height, legs, name, owner, breed){
    Pet.call(this, birthday, weight, height, legs, name, owner)

    if (typeof breed !== 'string')
        throw new TypeError(breed + ' is not a string')

    this.breed = breed
}

Cat.prototype = Object.create(Pet.prototype)
Cat.prototype.constructor = Cat

Cat.prototype.meow = function(){
    if (this.alive === false)
        throw new Error('tries to meow on alive false')
    if (this.awake === false)
        throw new Error('tries to meow on awake false')

    this.silent = false
    this.message = 'Meow, meow'
}


Cat.prototype.eat = function(food){
    if (typeof food !== 'string')
        throw new TypeError(food + ' is not a string')
    if (this.alive === false)
        throw new Error ('tries to eat on alive false')
    if (this.awake === false)
        throw new Error('tries to eat on awake false')
    

    if (food === 'lasagna'){
        this.silent = true
        this.message = ''
    }
    this.eats = food
}


module.exports = Cat