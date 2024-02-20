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

console.assert(found === 30, '30')
// 30

console.assert(nums[0] === 2, '2')
console.assert(nums[1] === 5, '5')
console.assert(nums[2] === 30, '30')
console.assert(nums[3] === 50, '50')
console.assert(nums.length === 4, '4')
// [2, 5, 30, 50]


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