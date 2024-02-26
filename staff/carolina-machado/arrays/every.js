function every(array, func) {


    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        if (func(element) !== true) {
            return false
        }
    }
    return true
}


console.log('CASE 1')

var arr1 = [4, 12, 4, 38, 42, 36, 100, 102]
var evenNumber = function (num) {
    return num % 2 === 0
}

var result = every(arr1, evenNumber)

//console.log(result)
//true

console.assert(result === true)




console.log('CASE 2')

var arr1 = [40, 20, 11, 20, 35, 46]
var biggerThanTen = function (num) {
    return num > 10
}

var result = every(arr1, biggerThanTen)

//console.log(result)
//true

console.assert(result === true) 