console.log('MATCHA 🍵 v.0')

var matcha = {}
var logs = []

function describe(title, callback) {
    logs[logs.length] = title
    callback()
}

function it(title, callback) {
    logs[logs.length] = '\t* ' + title
    callback()
}

function expect(value) {
    return {
        toBe: function (expected) {
            var matched = value === expected

            if (!matched) {
                toLog = '\t ❌ expect ' + value + ' to be ' + expected
                logs[logs.length] = toLog
                console.log(toLog)
                return matched
            }
            toLog = '\t ✅ expect ' + value + ' to be ' + expected
            logs[logs.length] = toLog
            console.log(toLog)
            return matched
        }
    }

}

matcha.logs = logs
matcha.describe = describe
matcha.it = it
matcha.expect = expect

module.exports = matcha