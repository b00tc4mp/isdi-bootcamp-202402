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

//CASE 1
let arr = [1, 2, 3, 4, 5]
let result = arrayEvery(arr, (x) => x > 0)
console.log(result)
//true

//CASE 2
result = arrayEvery(arr, (x) => x < 4)
console.log(result)
//false

//CASE 3
result = arrayEvery(arr, 2, (x) => x > 2)
console.log(result)
//true