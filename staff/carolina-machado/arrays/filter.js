function filter(array, func) {
    let newArr = []

    for (let i = 0; i < array.length; i++) {
        let element = array[i]

        if (func(element)) {

            newArr[newArr.length] = element

        }

    }
       return newArr
}

let arr1 = [2, 3, 5, 4, 6, 10, 11, 12, 13, 20, 22]
let evenNumber = function(num) {
    return num % 2 === 0
}

console.log(filter(arr1, evenNumber))




