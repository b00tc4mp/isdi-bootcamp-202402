var Animal = require('./Animal')
const Person = require('./Person')

function Pet (birthday, weight, height, legs, name, owner){
    Animal.call(this, birthday, weight, height, legs)

    if (typeof name !== 'string')
        throw new TypeError(name + ' is not a string')
    if (owner instanceof Person === false)
        throw new TypeError(owner + ' is not a Person')

    this.name = name
    this.owner = owner    
}

Pet.prototype = Object.create(Animal.prototype)
Pet.prototype.constructor = Pet


module.exports = Pet