delete Array.prototype.shift

function shiftArray(array) {
    if (array.length > 0){
        let element = array[0]
        for (let i = 0; i < array.length -1; i++){
            array[i] = array[i+1]
        }
        array.length--
        return element
    } else 
        return undefined
}

//CASE 1
let arr = [0, 1, 2, 3]
let result = shiftArray(arr)
console.log(arr)
//[1, 2, 3]
console.log(result)
//0

//CASE 2
let arr1 = []
result = shiftArray(arr1)
console.log(arr1)
//[]
console.log(result)
//undefined