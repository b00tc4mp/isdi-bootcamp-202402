delete Array.prototype.map

function map(arr, fn) {
    var newArray = []
    for (var i = 0; i < arr.length; i++) {
        newArray[newArray.length] = fn(arr[i])
    }
    return newArray
}

console.log('CASE 1')
var n = [1, 3, 6]
var nNew = map(n, (x) => x * 2)
// [2, 6, 12]


console.log('CASE 2')
var m = []
var mNew = map(m, (x) => x * 2)
// []


console.log('CASE 3')
var l = ['a', 'b', 'c']
var lNew = map(l, (x) => x * 2)
// [NaN, NaN, NaN]


console.log('CASE 4')
var lNewest = map(l, (x) => x + 'a')
// ['aa', 'ba', 'ca']