delete Array.prototype.unshift

function unshiftArray(array, ...elements){
    let newArray = []
    for (var i = 0; i < elements.length; i++){
        newArray[i] =  elements[i]
    }
    for (var i = 0; i < array.length; i++){
        newArray[newArray.length] = array[i]
    }
    for (var i = 0; i < newArray.length; i++){
        array[i] = newArray[i]
    }
    return array.length
}

console.log('CASE 1')

var arr = [4, 5]
var result = unshiftArray(arr, 1, 2, 3)
//console.log(arr)
//[1, 2, 3, 4, 5]
//console.log(result)
//5

console.assert(arr[0] === 1, 1)
console.assert(arr[1] === 2, 2)
console.assert(arr[2] === 3, 3)
console.assert(arr[3] === 4, 4)
console.assert(arr[4] === 5, 5)

console.assert(result === 5)