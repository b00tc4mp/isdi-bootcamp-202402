delete Array.prototype.concat

function concat(array, ...elements){
    if (array instanceof Array === false)
        throw new TypeError(array + ' is not an Array')
    
    var newArray = []
    for (var i = 0; i < array.length; i++){
        newArray[i] = array[i]
    }

    for (var i = 0; i < elements.length; i++){
        if (elements[i] instanceof Array){
            for (var j = 0; j < elements[i].length; j++){
                newArray[newArray.length] = elements[i][j]
            }
        } else {
            newArray[newArray.length] = elements[i]
        }
    }
    return newArray
}


function assert(arrayResult, ...elements){
    if (arrayResult instanceof Array === false)
        throw new TypeError(arrayResult + ' is not an Array')

    let currentIndex = 0
    
    for (let i = 0; i < elements.length; i++){
        if (elements[i] instanceof Array){
            for (let j = 0; j < elements[i].length; j++){
                console.assert(arrayResult[j + currentIndex] === elements[i][j], arrayResult[j + currentIndex])
            }
            currentIndex += elements[i].length 
        } else {
            console.assert(arrayResult[currentIndex] === elements[i], arrayResult[currentIndex])
            currentIndex++
        } 
    }  
}

console.log('CASE 1')

let arr1 = ['kill', 'me', 'please']
let arr2 = ['I', "can't", 'take', 'it', 'anymore']
let result = concat(arr1, arr2)
assert(result, arr1, arr2)


console.log('CASE 2')

let arr3 = ['make', 'it', 'stop']
let result1 = concat(arr1, arr2, arr3)
assert(result1, arr1, arr2, arr3)


console.log('CASE 3')

let str = 'please'
let result2 = concat(arr1, arr2, arr3, str)
assert(result2, arr1, arr2, arr3, str)


console.log('CASE 4')

let obj = {name: 'Pepito'}
let result3 = concat(arr1, obj)

for (var i = 0; i < arr1.length; i++){
    console.assert(result3[i] === arr1[i], arr1[i])
}
console.assert(result3[arr1.length].name === obj.name, 'Pepito')


console.log('CASE 5')

try {
    var result4 = concat(obj, arr1)
} catch(error){
    console.assert(error.message === "[object Object] is not an Array", 'error')
    console.assert(result4 === undefined)
}