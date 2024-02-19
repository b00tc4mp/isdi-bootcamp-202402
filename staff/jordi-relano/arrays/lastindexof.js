delete Array.prototype.lastIndexOf

function lastIndexOf(array, searchElement, index) {

    if (index === undefined) {
        for (var i = 0; i < array.length; i++) {
            debugger
            if (array[i] === searchElement) {
                return i
            }
        }
        if (index > array.length) {
            index = 0
        }
        else if (index < 0) {
            for (var i = array.length - 1; i < array.length; i--) {
                debugger
                if (array[i] === searchElement) {
                    return i;
                }
                else {
                    return -1
                }
            }

        }

        for (var i = index; i < array.length; i++) {
            debugger
            if (array[i] === searchElement) {
                return i;
            } else if (index > searchElement) {
                return i - index
            }
        }
    }
    return -1
}



console.log("CASE 1");

const animals = ["Dodo", "Tiger", "Penguin", "Frodo"];
let searchElement = "Dodo"

let result = lastIndexOf(animals, searchElement)
console.log(result)
//expected output 0

console.log("CASE 2");

const animals2 = ["Dodo", "Tiger", "Penguin", "Frodo"];
let searchElement1 = "Frodo"
let index = 2

result = lastIndexOf(animals2, searchElement1, index)
debugger
console.log(result)
//expected output 3

console.log("CASE 3");

const animals3 = ["Dodo", "Tiger", "Penguin", "Frodo"];
let searchElement2 = "Tiger"
let index1 = 5

const result2 = lastIndexOf(animals3, searchElement2, index1)
console.log(result2)

// expected output 1

console.log("CASE 4");

const numbers = [1, 2, 3, 4];
let num = 4
let indexNum = -2

const result3 = lastIndexOf(numbers, num, indexNum)
console.log(result3)
// expected output -1