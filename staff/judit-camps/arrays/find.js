delete Array.prototype.find

function find(arr, fun) {
    for (var i = 0; i < arr.length; i++) {
        if (fun(arr[i])) {
            return arr[i]
        }
    }
}

console.log('CASE 1: find the first element that is greater than 10')
var a = [2, 5, 30, 50]
var found = find(a, function (elem) { return elem > 10 })
console.assert(found === 30, 30)


console.log('CASE 2: find the first value in the object with the name - cherries')
const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
];
function isCherries(fruit) {
    return fruit.name === "cherries";
}
var result = find(inventory, isCherries)
var expected = { name: 'cherries', quantity: 5 }
for (key in result) {
    console.assert(result[key] === expected[key], expected[key])
}
// { name: 'cherries', quantity: 5 }