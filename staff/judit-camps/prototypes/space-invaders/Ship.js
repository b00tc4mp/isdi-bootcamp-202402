var Actor = require('./Actor')

function Ship(width, height) {
    Actor.call(this, width, height)
    this.lifes = 3
}

Ship.prototype = Object.create(Actor.prototype)
Ship.prototype.constructor = Ship

Ship.prototype.moveUp = function () {
    this.y -= this.step
}

Ship.prototype.moveDown = function () {
    this.y += this.step
}

Ship.prototype.moveRight = function () {
    this.x += this.step
}

Ship.prototype.moveLeft = function () {
    this.x -= this.step
}

module.exports = Ship