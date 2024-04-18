console.log('MATCHA 🍵 v.0')

var matcha = {}
var logs = []

function describe(title, callback) {
    logs[logs.length] = title
    console.log(title)
    callback()
}

function it(title, callback) {
    var toLog = '\t* ' + title
    logs[logs.length] = toLog
    console.log(toLog)
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
        },

        toBeInstanceOf: function (expected) {
            if (value instanceof expected) {
                toLog = '\t ✅ ' + value + ' is instance of ' + expected.name
            } else {
                toLog = '\t ❌ ' + value + ' is instance of ' + expected.name
            }
            logs[logs.length] = toLog
            console.log(toLog)
        }
    }
}

matcha.logs = logs
matcha.describe = describe
matcha.it = it
matcha.expect = expect

module.exports = matcha