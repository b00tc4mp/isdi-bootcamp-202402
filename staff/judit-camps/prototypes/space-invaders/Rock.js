var Actor = require('./Actor')

function Rock(width, height) {
    Actor.call(width, height)
}

Rock.prototype = Object.create(Actor.prototype)
Rock.prototype.constructor = Rock

module.exports = Rock