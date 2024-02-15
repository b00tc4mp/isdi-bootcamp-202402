delete Array.prototype.map

function forEach(array, formula) {
    let result = []
    for (let i = 0; i < array.length; i++){
        result[i] = formula(array[i])
    }
    return result
}

//CASE 1

let arr = [1, 2, 3]
let result = forEach(arr, (x) => x + 5)
console.log(result)
//[6, 7, 8]