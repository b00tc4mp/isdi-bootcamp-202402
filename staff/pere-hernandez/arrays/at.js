
function at(array, index) {
    if (array instanceof Array === false)
        throw new TypeError(array + ' is not an Array')
    if (!Number.isInteger(index))
        throw new TypeError(index + ' is not an Integer')
    
    return array[index > -1 ? index : array.length + index]
}



function copyArray(array){
    if (array instanceof Array === false)
        throw new TypeError(array + ' is not an Array')
    
    var copy = []
    for (var i = 0; i < array.length; i++){
        copy[copy.length] = array[i]
    }
    return copy
}


function assert(array1, array2){
    for (var i = 0; i < array1.length; i++){
        console.assert(array1[i] === array2[i], array1[i])
    }
}

console.log('CASE 1')

var nums = [100, 200, 300, 400, 500]
var copyNums = copyArray(nums)
var num = at(nums, 3)
console.assert(num === 400, 'value')
assert(copyNums, nums) 


console.log('CASE 2')

var chars = ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']
var copyChars = copyArray(chars)
var char = at(chars, 4)
console.assert(char === ' ', 'char')
assert(copyChars, chars)


console.log('CASE 3')

var chars = ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']
var copyChars = copyArray(chars)
var char = at(chars, -3)
console.assert(char === 'n', 'char')
assert(copyChars, chars)


console.log('CASE 4')

var chars = ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']
var copyChars = copyArray(chars)
var char = at(chars, -30)
console.assert(char === undefined, 'char')
assert(copyChars, chars)


console.log('CASE 5')

var str = 'hola mundo'
var copyStr = str
try {
    var char = at(str, 4)
} catch (error){
    console.assert(error.message === 'hola mundo is not an Array')
}
console.assert(copyStr === str, copyStr)



console.log('CASE 6')

var chars = ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']
var copyChars = copyArray(chars)
try {
    var char = at(chars, 'h')
} catch (error){
    console.assert(error.message === 'h is not an Integer')
}
assert(copyChars, chars)