function assert(value, target){
    console.assert(value === target, value + ' equals ' + target)
}

function error(error, type, message){
    console.assert(error.name === type, 'name')
    console.assert(error.message === message, 'message')
}

module.exports = {
    assert: assert,
    error: error
}