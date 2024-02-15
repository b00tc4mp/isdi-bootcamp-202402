delete Array.prototype.findIndex

function findIndex(arr, fun) {
    for (var i = 0; i < arr.length; i++) {
        if (fun(arr[i])) {
            return i
        }
    }
    return -1
}

console.log('CASE 1')
var a = [2, 5, 30, 50]
var index = findIndex(a, (elem) => elem > 10)
console.log(index)
// 2


console.log('CASE 2')
const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
    return fruit.name === "cherries";
}

console.log(findIndex(inventory, isCherries));
// 2