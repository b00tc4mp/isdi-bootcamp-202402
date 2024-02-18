function some(array, func) {
    for (var i = 0; i < array.length; i++) {
        let element = array[i]

        if (func(element)) {

            return true
        }

    }

    return false
}

/*CASE 1
    let arr1 = [3, 3, 3]
    let evenNumber = function (num) {
        if (num % 2 === 0) {
            return true
        } else {
            return false
        }
    }

    console.log(some(arr1, evenNumber))*/

//CASE 2

let arr1 = [10, 20, 40]
let biggerThanTen = function (num) {
    if (num >= 10) {
        return true
    } else {
        return false
    }
}

console.log(some(arr1, biggerThanTen))