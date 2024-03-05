function assert(value, target){
    console.assert(value === target, value + ' equals ' + target)
}

function error(error, type, message){
    console.assert(error.name === type, 'name')
    console.assert(error.message === message, 'message')
}

function instanceOf(value, type) {
    console.assert(value instanceof type === true, value + ' is instance of ' +  type)
}

module.exports = {
    assert: assert,
    error: error,
    instanceOf: instanceOf
}