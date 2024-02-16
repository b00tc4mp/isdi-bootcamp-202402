delete Array.prototype.slice

function sliceArray(array, start, end){
    let newArray = []
    let count = 0
    if (end === undefined){
        for (let i = start; i < array.length; i++){
            newArray[count] = array[i]
            count++
        }
    } else {
        for (let i = start; i < end; i++){
            newArray[count] = array[i]
            count++
        }
    }
    return newArray
}

//CASE 1

let arr = ['azÚcar', 'especias', 'muchas cosas bonitas', 'sustancia X']
let result = sliceArray(arr, 3)
console.log(result)
//['sustancia X']

//CASE 2
result = sliceArray(arr, 1, 3)
console.log(result)
//['especias', 'muchas cosas bonitas']
