delete Array.prototype.find

function findArray(array, formula) {
    for (let i = 0; i < array.length; i++){
        if (formula(array[i]) === true)
            return array[i]
    }
}

//CASE 1
let arr = [1, 2, 3, 4, 5]
let result = findArray(arr, (x) => x > 2)
console.log(result)
//2