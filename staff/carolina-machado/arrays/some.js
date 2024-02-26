function some(array, func) {
    for (var i = 0; i < array.length; i++) {
        let element = array[i]

        if (func(element)) {

            return true
        }

    }

    return false
}

console.log('CASE 1')

var arr1 = [10, 20, 40]
var biggerThanTen = function (num) {
   return num > 10
}

var result = some(arr1, biggerThanTen)
//console.log(result)

console.assert(result === true, true)

console.log('CASE 2')

var arr1 = [11, 21, 41]
var even = function (element) {return element % 2 === 0};

var result = (some(arr1, even))

//console.log(result)
// Expected output: false
console.assert(result === false, false)