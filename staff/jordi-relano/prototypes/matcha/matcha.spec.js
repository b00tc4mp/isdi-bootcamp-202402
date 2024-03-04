var assert = require('./assert')
var matcha = require('./matcha')

console.log('matcha')
console.log('> describe')

var run = false

assert.equalsValue(!!matcha.describe, true)

// si hay doble exclamación estamos checqueando si la función o el método existe ( lo convertimos a booleano)

matcha.describe('describe title', function () {
    run = true
})

assert.equalsValue(run, true)
assert.equalsValue(matcha.logs[0], 'describe title')

console.log('> it')

matcha.logs.length = 0
var run = false

assert.equalsValue(!!matcha.it, true)

matcha.it('it title', function () {
    run = true
})

assert.equalsValue(run, true)
assert.equalsValue(matcha.logs[0], '* it title')

console.log('> expect toBe (happy path)')

assert.equalsValue(!!matcha.expect, true)

matcha.logs.length = 0
var result = matcha.expect(10).toBe(10)

assert.equalsValue(result, true)
assert.equalsValue(matcha.logs[0], '✅ 10 to be 10')

console.log('> expect toBe (unhappy path)')

assert.equalsValue(!!matcha.expect, true)

matcha.logs.length = 0
var result = matcha.expect(10).toBe(20)

assert.equalsValue(result, false)
assert.equalsValue(matcha.logs[0], '❌ 10 to be 20')

