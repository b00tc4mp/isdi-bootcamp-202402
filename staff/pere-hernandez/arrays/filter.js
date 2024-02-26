delete Array.prototype.filter

function arrayFilter(array, index, callback) {
    if (array instanceof Array === false)
        throw new TypeError (array + ' is not an Array')

    let newArray = []
    if (arguments.length < 3){
        callback = index
        if (callback instanceof Function === false)
            throw new TypeError (callback + ' is not a Function')

        for (let i = 0; i < array.length; i++){
            if (callback(array[i]) === true)
                newArray[newArray.length] = array[i]
        }
    } else {
        if (callback instanceof Function === false)
            throw new TypeError (callback + ' is not a Function')
        if (!Number.isInteger(index))
            throw new TypeError (index + ' is not an Integer')

        for (let i = index; i < array.length; i++){
            if (callback(array[i]) === true)
                newArray[newArray.length] = array[i]
        }
    }
    return newArray
}

function assert(array1, array2){
    for (var i = 0; i < array1.length; i++){
        console.assert(array1[i] === array2[i], array1[i])
    }
}

console.log('CASE 1')

let arr = ['yellow', 'red', 'blue', 'green']
let result = arrayFilter(arr, (x) => x.length > 3)
let expectedResult = ['yellow', 'blue', 'green']
assert(result, expectedResult)


console.log('CASE 2')
result = arrayFilter(arr, 1, (x) => x.length > 3)
expectedResult = ['blue', 'green']
assert(result, expectedResult)


console.log('CASE 3')
let str = "I'm not an Array"
try {
    result = arrayFilter(str, (x) => x.length > 3)
} catch (error){
    console.assert(error.name === 'TypeError', 'name')
    console.assert(error.message === "I'm not an Array is not an Array", 'message')
}


console.log('CASE 4')
try {
    result = arrayFilter(arr, 3)
} catch (error){
    console.assert(error.name === 'TypeError', 'name')
    console.assert(error.message === "3 is not a Function", 'message')
}


console.log('CASE 5')
try {
    result = arrayFilter(arr, 3, 3)
} catch (error){
    console.assert(error.name === 'TypeError', 'name')
    console.assert(error.message === "3 is not a Function", 'message')
}


console.log('CASE 6')
try {
    result = arrayFilter(arr, str, 3)
} catch (error){
    console.assert(error.name === 'TypeError', 'name')
    console.assert(error.message === "3 is not a Function", 'message')
}