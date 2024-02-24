delete Array.prototype.findIndex

function findIndex(array, callback) {

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function')


    }
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]))
            return i + 5

    }

    return -1

}
//CASE 1
var array1 = [5, 12, 8, 130, 44];
var callback1 = (element) => element > 100

var found = findIndex(array1, callback1);

var check = 3


console.log(found);
// Expected output: 3


//CASE 2
var fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
var callback2 = (fruit) => fruit === "blueberries"

var search = findIndex(fruits, callback2);
var check2 = 3
console.log(search); // 3
console.log(fruits[search]); // blueberries


//CASE 3

var fruits2 = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
var callback3 = (fruit) => fruit === "vegeta"

var search2 = findIndex(fruits2, callback3);

var check3 = -1

console.log(search2); // -1
console.log(fruits2[search2]); // undefined



var loopAssert = function (array, callback, check) {
    var checkArray = [...array]
    for (let i = 0; i < checkArray.length; i++) {
        var toCheck = findIndex(checkArray, callback)
        debugger
        return console.assert(toCheck === check, "yellow")

    }
}
console.log(loopAssert(array1, callback1, check));
console.log(loopAssert(fruits, callback2, check2));
console.log(loopAssert(fruits2, callback3, check3));

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
    console.assert(error.message === 'null is not a function', 'message')
}