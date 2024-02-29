const Animal = require("./animal")

function Cat(name, specie, birthdate, country, height, weight, sex){

    if (typeof name !== 'string') throw new TypeError ('name is not a string')
    if (typeof surname !== 'string') throw new TypeError ('surname is not a string')
    if(typeof specie !== 'string') throw new TypeError ('specie is not a string')
    if(!(birthdate instanceof Date)) throw new TypeError ('birthdate is not a Date')
    if(typeof country !== 'string') throw new TypeError ('country is not a string')
    if(typeof weight !== 'number') throw new TypeError ('weight ir not a number')
    if(typeof height !== 'number') throw new TypeError ('height ir not a number')
    if (typeof sex !== 'string') throw new TypeError ('sex is not a string')

    Animal.call(this,name, specie, birthdate, country, height, weight, sex)

    this.tail = 
}


Cat.prototype = Object.create(Animal.prototype)
Cat. prototype.constructor = Cat

module.exports = Cat