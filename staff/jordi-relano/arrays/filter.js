delete Array.prototype.filter

function filter(array, callback) {
    let arrayResult = [];

    for (let i = 0; i < array.length; i++) {
        debugger
        if (callback(array[i])) {
            arrayResult[arrayResult.length] = array[i];

        }

    }
    return arrayResult

}

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
let index = 4;
let result = filter(animals, (word) => word.length > index);
console.log(result);
//expected output: animals = ['bison', 'camel'];