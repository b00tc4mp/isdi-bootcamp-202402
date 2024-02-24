delete Array.prototype.findIndex

function findIndex(array, callback) {

    if (typeof callback !== 'function'){
        throw new TypeError(callback + ' is not a function')

    
    }
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]))
            return i

    }

    return -1

}

//CASE 1
var array1 = [5, 12, 8, 130, 44];

var found = findIndex(array1, (element) => element > 100);

console.log(found);
// Expected output: 3

console.assert(found === 3)

var comproveArray = [5, 12, 8, 130, 44];


var loopAssert = function(array,...param) {
for (let i = 0; i < array1.length; i++) {
    console.assert(array1[i] === comproveArray[i], comproveArray[i])
}
}
var loopAssertLength = function(array,...param) {
console.assert(array1.length === comproveArray.length, comproveArray.length)
}


//CASE 2
var fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

var search = findIndex(fruits, (fruit) => fruit === "blueberries");

console.log(search); // 3
console.log(fruits[search]); // blueberries

//CASE 3

var fruits2 = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

var search2 = findIndex(fruits2, (fruit) => fruit === "vegeta");

console.log(search2); // -1
console.log(fruits2[search2]); // undefined

try {
    findIndex(fruits2)
} catch (error) {
    console.assert(error.name === 'TypeError', 'name')
    console.assert(error.message === 'undefined is not a function', 'message')
}


try {
    findIndex(fruits2, {})
} catch (error) {
    console.assert(error.name === 'TypeError', 'name')
    console.assert(error.message === '[object Object] is not a function', 'message')
}

try {
    findIndex(fruits2, null)
} catch (error) {
    console.assert(error.name === 'TypeError', 'name')
    console.assert(error.message === '[object Object] is not a function', 'message')
}