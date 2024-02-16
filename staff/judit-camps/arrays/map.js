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
var nNew = map(n, (x) => x * 2)
console.log(nNew)
// [2, 6, 12]


console.log('CASE 2')
var m = []
var mNew = map(m, (x) => x * 2)
console.log(mNew)
// []


console.log('CASE 3')
var l = ['a', 'b', 'c']
var lNew = map(l, (x) => x * 2)
console.log(lNew)
// [NaN, NaN, NaN]


console.log('CASE 4')
var lNewest = map(l, (x) => x + 'a')
console.log(lNewest)
// ['aa', 'ba', 'ca']

console.log('CASE Alex')
var n = [1, 3, 6]
var nNew = map(n, (x, i) => x + i)
console.log(nNew)
// [1, 4, 8] 


console.log('CASE 5')
var nums = [10, 20, 30, 40, 50]
var newNums = map(nums, (num, index, array) => num + index + array.length)
console.log(newNums)
// [15, 26, 37, 48, 59]