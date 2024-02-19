delete Array.prototype.find

function find(arr, fun) {
    for (var i = 0; i < arr.length; i++) {
        if (fun(arr[i])) {
            return arr[i]
        }
    }
}

console.log('CASE 1')
var a = [2, 5, 30, 50]
var found = find(a, function (elem) { return elem > 10 })
console.log(found)


console.log('CASE 2')
const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
    return fruit.name === "cherries";
}

console.log(find(inventory, isCherries));
// { name: 'cherries', quantity: 5 }