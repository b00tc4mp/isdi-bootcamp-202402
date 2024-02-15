function filter(array, func) {
    let newArr = []

    for (let i = 0; i < array.length; i++) {

        if (func(array[i])) {

        newArr[newArr.length] = array[i]

        }

    }
    return newArr
}

let arr1 = [2, 3, 5, 4, 6]
let evenNumber = function(num) {
    return num % 2 === 0
}

console.log(filter(arr1, evenNumber))




