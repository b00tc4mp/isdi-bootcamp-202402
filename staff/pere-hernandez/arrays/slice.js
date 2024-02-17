delete Array.prototype.slice

function sliceArray(array, start, end){
    let newArray = []
    let count = 0
    if (end === undefined && start > -1){
        for (let i = start; i < array.length; i++){
            newArray[count] = array[i]
            count++
        }
        array.length = start
    } else if (start > -1 && end > -1) {
        let slicedArray = []
        for (let i = start; i < end + 1; i++){
            newArray[count] = array[i]
            count++
        }
        count = 0
        for (let i = 0; i < start; i++){
           slicedArray[count] = array[i]
            count++
        }
        for (let i = end +1; i < array.length; i++){
            slicedArray[count] = array[i]
            count++
        }
        array.length = 0;
        for (let i = 0; i < slicedArray.length; i++) {
          array[i] = slicedArray[i];
        }
    } else if (start < 0 && end === undefined){
        for (let i = array.length + start; i < array.length; i++){
            newArray[count] = array[i]
            count++
        }
    } else if (start > -1 && end < 0){
        for (let i = start; i < (end * -1) +1; i++){
            newArray[count] = array[i]
            count++
        }
    } else if (arguments.length < 2){
        return array
    }
    return newArray
}

//CASE 1

let arr = ['azúcar', 'especias', 'muchas cosas bonitas', 'sustancia X']
let result = sliceArray(arr, 3)
console.log(result)
//['sustancia X']
console.log(arr)
//['azúcar', 'especias', 'muchas cosas bonitas']

//CASE 2
let arr1 = ['azúcar', 'especias', 'muchas cosas bonitas', 'sustancia X']
result = sliceArray(arr1, 1, 2)
console.log(result)
//['especias', 'muchas cosas bonitas']
console.log(arr1)
//['azúcar', 'sustancia X']

//CASE 3
let arr2 = ['azúcar', 'especias', 'muchas cosas bonitas', 'sustancia X']
result = sliceArray(arr2, -3)
console.log(result)
//['especias', 'muchas cosas bonitas', 'sustancia X']

//CASE 4
let arr3 = ['azúcar', 'especias', 'muchas cosas bonitas', 'sustancia X']
result = sliceArray(arr3, 1, -2)
console.log(result)
//['especias', 'muchas cosas bonitas']

//CASE 5
let arr4 = ['azúcar', 'especias', 'muchas cosas bonitas', 'sustancia X']
result = sliceArray(arr4)
console.log(result)
//['azúcar', 'especias', 'muchas cosas bonitas', 'sustancia X']