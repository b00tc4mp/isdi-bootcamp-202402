delete Array.prototype.findIndex

function findIndex(arr, fun) {
    for (var i = 0; i < arr.length; i++) {
        var elem = arr[i]
        if (fun(elem)) {
            return i
        }
    }
    return -1
}

console.log('CASE 1: show the first index in which the value is greater than 10')
var a = [2, 5, 30, 50]
var index = findIndex(a, function (elem) { return elem > 10 })
console.assert(index === 2, 2)
// 2


console.log('CASE 2: find index in which name is cherries')
const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
];
function isCherries(fruit) {
    return fruit.name === "cherries";
}
var result = findIndex(inventory, isCherries)
console.assert(result === 2, 2);
// 2