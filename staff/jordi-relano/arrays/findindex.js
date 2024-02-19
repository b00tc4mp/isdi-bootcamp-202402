delete Array.prototype.findIndex

function findIndex(array, callback) {

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]))
            return i

    }

return -1

}

//CASE 1
const array = [5, 12, 8, 130, 44];

const found = findIndex(array, (element) => element > 100);

console.log(found);
// Expected output: 3

//CASE 2
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const search = findIndex(fruits, (fruit) => fruit === "blueberries");

console.log(search); // 3
console.log(fruits[search]); // blueberries

//CASE 3

const fruits2 = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const search2 = findIndex(fruits2, (fruit) => fruit === "vegeta");

console.log(search2); // -1
console.log(fruits2[search2]); // undefined