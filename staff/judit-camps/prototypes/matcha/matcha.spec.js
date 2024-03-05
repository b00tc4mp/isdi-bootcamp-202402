var assert = require('./assert')
var matcha = require('./matcha')

console.log('matcha')

console.log('> describe')
var run = false
assert.equalValue(!!matcha.describe, true)
matcha.describe('describe title', function () {
    run = true
})
assert.equalValue(run, true)
assert.equalValue(matcha.logs[0], 'describe title')


console.log('> it')
matcha.logs.length = 0
var run = false
assert.equalValue(!!matcha.it, true)
matcha.it('it title', function () {
    run = true
})
assert.equalValue(run, true)
assert.equalValue(matcha.logs[0], '\t* it title')


console.log('> expect toBe (happy path)')
matcha.logs.length = 0
var run = false
assert.equalValue(!!matcha.expect, true)
var run = false
var results = matcha.expect(10).toBe(10)
assert.equalValue(results, true)
assert.equalValue(matcha.logs[0], '\t ✅ expect 10 to be 10')


console.log('> expect toBe (unhappy path)')
matcha.logs.length = 0
var run = false
assert.equalValue(!!matcha.expect, true)
var run = false
var results = matcha.expect(10).toBe(20)
assert.equalValue(results, false)
assert.equalValue(matcha.logs[0], '\t ❌ expect 10 to be 20')