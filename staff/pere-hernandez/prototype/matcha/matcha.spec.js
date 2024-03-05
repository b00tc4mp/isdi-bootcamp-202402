var assert = require('./assert')
var matcha = require('./matcha')

console.log('matcha')



console.log('> describe')

matcha.logs.length = 0
var run = false

assert.assert(!!matcha.describe, true)

matcha.describe('describe title', function() {
    run = true
})

assert.assert(run, true)
assert.assert(matcha.logs[0], 'describe title')



console.log('> it')

matcha.logs.length = 0
run = false

assert.assert(!!matcha.it, true)

matcha.it('it title', function () {
    run = true
})

assert.assert(run, true)
assert.assert(matcha.logs[0], '* it title')



console.log('> expect toBe (happy path)')

assert.assert(!!matcha.expect, true)

matcha.logs.length = 0
var result = matcha.expect(10).toBe(10)

assert.assert(result, true)
assert.assert(matcha.logs[0], '✅ 10 to be 10')



console.log('< expect toBe (unhappy path)')

matcha.logs.length = 0
result = matcha.expect(10).toBe(12)

assert.assert(result, false)
assert.assert(matcha.logs[0], '❌ 10 to be 12')