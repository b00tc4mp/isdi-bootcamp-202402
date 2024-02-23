delete Array.prototype.every

function arrayEvery(array, index, callback) {
    if (array.length === 0){

    } else if (arguments.length < 3){
        callback = index
        for (let i = 0; i < array.length; i++){
            if (callback(array[i]) === false)
                return false
        }
    } else {
        for (let i = index; i < array.length; i++){
            if (callback(array[i]) === false)
                return false
        }
    }
    return true
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

let arr = [1, 2, 3, 4, 5]
let copyArr = copyArray(arr)
let result = arrayEvery(arr, (x) => x > 0)
console.assert(result === true, 'true')
assert(copyArr, arr)


console.log('CASE 2')

result = arrayEvery(arr, (x) => x < 4)
console.assert(result === false, 'false')
assert(copyArr, arr)


console.log('CASE 3')

result = arrayEvery(arr, 2, (x) => x > 2)
console.assert(result === true, 'true')
assert(copyArr, arr)