var Actor = require('./Actor')

function Missile(width, height) {
    Actor.call(width, height)
}

Missile.prototype = Object.create(Actor.prototype)
Missile.prototype.constructor = Missile

module.exports = Missile