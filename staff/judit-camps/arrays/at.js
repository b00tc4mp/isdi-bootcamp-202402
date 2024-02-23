delete Array.prototype.at

function at(array, index) {
    // Ternari -> l'index és més gran que -1? si, fem servir l'index. : No, el nou index sera array.length + index
    var targetIndex = index > -1 ? index : array.length + index

    return array[targetIndex]

}

console.log('CASE 1: show value at position 3 -> 400')
var nums = [100, 200, 300, 400, 500]
var num = at(nums, 3)
console.assert(num === 400, 'num 400')


console.log('CASE 2: show value at position 4 -> " "')
var chars = ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']
var char = at(chars, 4)
console.assert(char === ' ', 'char " "')


console.log('CASE 3: show value at position -3 -> n')
var chars = ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']
var char = at(chars, -3)
console.assert(char === 'n', 'char n')


console.log('CASE 4: show value at position -30 -> undefined')
var chars = ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']
var char = at(chars, -30)
console.assert(char === undefined)
