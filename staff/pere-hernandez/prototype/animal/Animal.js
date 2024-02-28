function Animal (birthday, weight, height, legs){
    if (birthday instanceof Date === false)
        throw new TypeError(birthday + ' is not a Date')
    if (typeof weight !== 'number')
        throw new TypeError(weight + ' is not a number')
    if (weight < 0)
        throw new RangeError('weight needs to be positive')
    if (typeof height !== 'number')
        throw new TypeError(height + ' is not a number')
    if (height < 0)
        throw new RangeError('height needs to be positive')
    if (!Number.isInteger(legs))
        throw new TypeError(legs + ' is not an Integer')
    if (legs < 0)
        throw new RangeError('legs needs to be positive')

    this.birthday = birthday
    this.weight = weight
    this.height = height
    this.legs = legs
    this.eats = ''
    this.awake = true
    this.speed = 0
    this.alive = true
}

Animal.prototype.eat = function(food){
    if (typeof food !== 'string')
        throw new TypeError(food + ' is not a String')
    if (this.awake === false)
        throw new Error('tries to eat on awake false')
    if (this.alive === false)
        throw new Error ('tries to eat on alive false')

    this.eats = food
}

Animal.prototype.sleep = function(){
    if (this.alive === false)
        throw new Error('tries to sleep on alive false')
    this.awake = false
}

Animal.prototype.wakeUp = function(){
    if (this.alive === false)
        throw new Error('tries to wake up on alive false')
    this.awake = true
}

Animal.prototype.move = function(speed){
    if (typeof speed !== 'number')
        throw new TypeError(speed + ' is not a number')
    if (speed < 0)
        throw new RangeError('speed must be positive')
    if (this.awake === false)
        throw new Error('try to move on awake false')
    if (this.alive === false)
    throw new Error('tries to move on alive false')

    this.speed = speed
}

Animal.prototype.die = function(){
    this.alive = false
}

module.exports = Animal