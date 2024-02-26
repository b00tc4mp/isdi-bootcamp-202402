delete Array.prototype.some

function arraySome(array, callback) {
    for (let i = 0; i < array.length; i++){
        if (callback(array[i]) === true)
            return true
    }
    return false
}

//CASE 1

let arr = [1, 2, 3, 4, 5]
let result = arraySome(arr, (x) => x > 4)
console.log(result)
//true

//CASE 2
result = arraySome(arr, (x) => x > 6)
console.log(result)
//false