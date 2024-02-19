delete Array.prototype.find

function find(array, callback) {

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]))
            return array[i]

    }



}

const array = [5, 12, 8, 130, 44];


const found = find(array, (element) => element > 100);

console.log(found);
// Expected output: 12