delete Array.prototype.every

function every(arr, callback) {
    var stillTrue = true
    for (var i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr) && arr[i] != undefined) {
            stillTrue = false
        }
    }
    return stillTrue
}

console.log('CASE 1: find if every value in an array is bigger or equal than 10')
function isBigEnough(element, index, array) {
    return element >= 10;
}
console.log('CASE 1.1')
var expected = false
var obtained = every([12, 5, 8, 130, 44], isBigEnough)
console.assert(obtained === expected, expected);

console.log('CASE 1.2')
expected = true
obtained = every([12, 54, 18, 130, 44], isBigEnough)
console.assert(obtained === expected, expected);



console.log('CASE 2: find if every value of the array equal or not to the given value')
console.log('CASE 2.1')
obtained = every([1, , 3], function (x) { return x !== undefined })
expected = true
console.assert(obtained === expected, expected);

console.log('CASE 2.2')
obtained = every([2, , 2], function (x) { return x === 2 })
expected = true
console.assert(obtained === expected, expected);



console.log('CASE 3: finds if every value in object is a string')
const d = {
    0: "a",
    1: "b",
    2: "c",
    3: 345, // ignored by every() since length is 3
    length: 3
};
obtained = every(d, function (x) { return typeof x === "string" })
expected = true
console.assert(obtained === expected, expected);

