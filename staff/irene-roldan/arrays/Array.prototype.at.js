delete Array.prototype.at

function at(array, index) {

    var targetIndex = index > -1? index : array.length + index
    
    var element = array[targetIndex]

    return element
    
    //index > -1 es como decir index i >= 0
    // + comprimido array[index > -1? index : array.length + index]
}

console.log('Case 1')

var nums = [100, 200, 300, 400, 500];
var num = at(nums, 3);

console.assert(num === 400, 'the value should be 400')


console.log('Case 2')

var chars = ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']
var char = at(chars, 4)

console.assert(char === ' ', 'should be a space')

console.log ('Case 3')

var chars = ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']
var char = at(chars, -3)

var char = at(chars, -3)

console.assert(char === 'n', ' in position should be n' )

console.log('Case 4')

var chars = ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']
var char = at(chars, -30)

console.assert(char === undefined, 'undefined')