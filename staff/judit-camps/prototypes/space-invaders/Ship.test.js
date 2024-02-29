var assert = require('./assert')
var Actor = require('./Actor')
var Ship = require('./Ship')


console.log('TEST Ship')
console.log('* constructor')
var ship = new Ship(100, 150)
assert.instanceOf(ship, Ship)
assert.instanceOf(ship, Actor)
assert.equalValue(ship.constructor, Ship)
assert.equalValue(ship.x, 0)
assert.equalValue(ship.y, 0)
assert.equalValue(ship.z, 0)
assert.equalValue(ship.step, 1)
assert.equalValue(ship.width, 100)
assert.equalValue(ship.height, 150)

assert.equalValue(ship.lifes, 3)

console.log('* move up')
var ship = new Ship(50, 100)
ship.moveUp()
assert.equalValue(ship.y, -ship.step)


console.log('* move down')
var ship = new Ship(50, 100)
ship.moveDown()
assert.equalValue(ship.y, +ship.step)


console.log('* move right')
var ship = new Ship(50, 100)
ship.moveRight()
assert.equalValue(ship.x, +ship.step)


console.log('* move left')
var ship = new Ship(50, 100)
ship.moveLeft()
assert.equalValue(ship.x, -ship.step)


