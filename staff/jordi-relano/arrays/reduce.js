delete Array.prototype.reduce

function reduce(array, callback, InitialValue) {


    if (arguments.length > 2) {
        var acc = initialValue
        for (let i = 0; i < array.length; i++) {

            acc = callback(acc, array[i])
        }
    } else {
        var acc = 0
        for (let i = 0; i < array.length; i++) {
            acc = callback(acc, array[i])

        }
    }
    return acc
}


const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 5;
const sumWithInitial = reduce(array, (accumulator, currentValue) => accumulator + currentValue,
    initialValue);

console.log(sumWithInitial);
//  15

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4

const sumWithInitial1 = reduce(array, (accumulator, currentValue) => accumulator + currentValue);

console.log(sumWithInitial1);
//  10