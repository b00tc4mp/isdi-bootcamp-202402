var assert = require('./assert')
var Actor = require('./Actor')

console.log('TEST Actor')
console.log('* constructor')

var actor = new Actor(100, 150)
assert.instanceOf(actor, Actor)
assert.equalValue(actor.constructor, Actor)
assert.equalValue(actor.x, 0)
assert.equalValue(actor.y, 0)
assert.equalValue(actor.z, 0)
assert.equalValue(actor.step, 1)
assert.equalValue(actor.width, 100)
assert.equalValue(actor.height, 150)

