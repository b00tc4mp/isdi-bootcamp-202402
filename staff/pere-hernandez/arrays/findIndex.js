delete Array.prototype.findIndex

function arrayFindIndex(array, index, callback) {
    if (array instanceof Array === false)
        throw new TypeError(array + ' is not an Array')
    
    if (arguments.length < 3){
        callback = index
        if (callback instanceof Function === false)
            throw new TypeError(callback + ' is not a Function')
        
        for (let i = 0; i < array.length; i++){
            if (callback(array[i]) === true)
                return i
        }
        
    } else {
        if (callback instanceof Function === false)
            throw new TypeError(callback + ' is not a Function')
        if (!Number.isInteger(index))
            throw new TypeError(index + ' is not an Integer')
        
        for (let i = index; i < array.length; i++){
            if (callback(array[i]) === true)
                return i
        } 
    }
    return -1
}

console.log('CASE 1')
let arr = [3, 2, 3, 4, 5]
let result = arrayFindIndex(arr, 1, (x) => x > 2)
console.assert(result === 2, '2')


console.log('CASE 2')
result = arrayFindIndex(arr, (x) => x > 8)
console.assert(result === -1, '-1')


console.log('CASE 3')
result = arrayFindIndex(arr, (x) => x > 2)
console.assert(result === 0, '0')


console.log('CASE 4')
let str = 'I am a String'
try {
    result = arrayFindIndex(str, 1, (x) => x > 2)
} catch (error){
    console.assert(error.name === 'TypeError', 'name')
    console.assert(error.message === 'I am a String is not an Array')
}


console.log('CASE 5')
try {
    result = arrayFindIndex(arr, str)
} catch (error) {
    console.assert(error.name === 'TypeError', 'name')
    console.assert(error.message === 'I am a String is not a Function')
}


console.log('CASE 6')
try {
    result = arrayFindIndex(arr, str, (x) => x > 2)
} catch (error) {
    console.assert(error.name === 'TypeError', 'name')
    console.assert(error.message === 'I am a String is not an Integer')
}