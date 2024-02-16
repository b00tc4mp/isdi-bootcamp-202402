delete Array.prototype.some

function some(arr, fn) {
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            return true
        }
    }
    return false
}

console.log('CASE 1')
var array = [1, 2, 3, 4, 5];

// Checks whether an element is even
var even = (element) => element % 2 === 0;

console.log(some(array, even));
// Expected output: true


console.log('CASE 2')
var n = [2, 5, 8, 1, 4]
function isBiggerThan10(element, index, array) {
    return element > 10;
}
console.log(some(n, isBiggerThan10));
// false


console.log('CASE 3')
var m = [12, 5, 8, 1, 4]

console.log(some(m, isBiggerThan10));
// true