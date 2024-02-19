delete Array.prototype.filter

function arrayFilter(array, index, callback) {
    let newArray = []
    if (arguments.length < 3){
        callback = index
        for (let i = 0; i < array.length; i++){
            if (callback(array[i]) === true)
                newArray[newArray.length] = array[i]
        }
    } else {
        for (let i = index; i < array.length; i++){
            if (callback(array[i]) === true)
                newArray[newArray.length] = array[i]
        }
    }
    return newArray
}

//CASE 1

let arr = ['yellow', 'red', 'blue', 'green']
let result = arrayFilter(arr, (x) => x.length > 3)
console.log(result)
//['yellow', 'blue', 'green']

//CASE 2
result = arrayFilter(arr, 1, (x) => x.length > 3)
console.log(result)
//['blue', 'green']