delete Array.prototype.map

function map(arr, fn) {
    var newArray = []
    for (var i = 0; i < arr.length; i++) {
        newArray[newArray.length] = fn(arr[i], i, arr)
    }
    return newArray
}

console.log('CASE 1')
var n = [1, 3, 6]
var nNew = map(n, function (x) { return x * 2 })
console.log(nNew)
// [2, 6, 12]


console.log('CASE 2')
var m = []
var mNew = map(m, function (x) { return x * 2 })
console.log(mNew)
// []


console.log('CASE 3')
var l = ['a', 'b', 'c']
var lNew = map(l, function (x) { return x * 2 })
console.log(lNew)
// [NaN, NaN, NaN]


console.log('CASE 4')
var lNewest = map(l, function (x) { return x + 'a' })
console.log(lNewest)
// ['aa', 'ba', 'ca']


console.log('CASE Alex')
var n = [1, 3, 6]
var nNew = map(n, function (x, i) { return x + i })
console.log(nNew)
// [1, 4, 8] 


console.log('CASE 5')
var nums = [10, 20, 30, 40, 50]
var newNums = map(nums, function (num, index, array) { return num + index + array.length })
console.log(newNums)
// [15, 26, 37, 48, 59]