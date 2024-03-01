var Actor = require('./Actor')

function Alien(width, height) {
    Actor.call(width, height)
}

Alien.prototype = Object.create(Actor.prototype)
Alien.prototype.constructor = Alien

module.exports = Alien