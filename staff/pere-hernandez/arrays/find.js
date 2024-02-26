delete Array.prototype.find

function findArray(array, formula) {
    if (array instanceof Array === false)
        throw new TypeError(array + ' is not an Array')
    if (formula instanceof Function === false)
        throw new TypeError(formula + ' is not a Function')
    
    for (let i = 0; i < array.length; i++){
        if (formula(array[i]) === true)
            return array[i]
    }
}

console.log('CASE 1')
let arr = [1, 2, 3, 4, 5]
let result = findArray(arr, (x) => x > 2)
console.assert(result === 3, '3')


console.log('CASE 2')
result = findArray(arr, (x) => x > 10)
console.assert(result === undefined, 'undefined')


console.log('CASE 3')
let str = 'I am a String'
try {
    result = findArray(str, (x) => x > 10)
} catch (error){
    console.assert(error.name === 'TypeError', 'name')
    console.assert(error.message === 'I am a String is not an Array')
}


console.log('CASE 4')
try {
    result = findArray(arr, str)
} catch (error){
    console.assert(error.name === 'TypeError', 'name')
    console.assert(error.message === 'I am a String is not a Function')
}