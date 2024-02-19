delete Array.prototype.findIndex

function arrayFindIndex(array, index, callback) {
    if (arguments.length < 3){
        callback = index
        for (let i = 0; i < array.length; i++){
            if (callback(array[i]) === true)
                return i
        }
        return -1
    } else {
        for (let i = index; i < array.length; i++){
            if (callback(array[i]) === true)
                return array[i]
        } 
    }
}

//CASE 1
let arr = [3, 2, 3, 4, 5]
let result = arrayFindIndex(arr, 1, (x) => x > 2)
console.log(result)
//2

//CASE 2
result = arrayFindIndex(arr, (x) => x > 8)
console.log(result)
//-1

//CASE 3
result = arrayFindIndex(arr, (x) => x > 2)
console.log(result)
//0