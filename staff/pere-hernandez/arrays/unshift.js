delete Array.prototype.unshift

function unshiftArray(array, ...elements){
    let newArray = []
    for (let i = 0; i < elements.length; i++){
        newArray[i] =  elements[i]
    }
    for (let i = 0; i < array.length; i++){
        newArray[newArray.length] = array[i]
    }
    for (let i = 0; i < newArray.length; i++){
        array[i] = newArray[i]
    }
    return array.length
}

//CASE 1

let arr = [4, 5]
let result = unshiftArray(arr, 1, 2, 3)
console.log(arr)
//[1, 2, 3, 4, 5]
console.log(result)
//5