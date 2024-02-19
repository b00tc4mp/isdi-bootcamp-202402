delete Array.prototype.every

function every(array, callback){
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i]) === false){
            return false
        }
    }

    return true
}



console.log('CASE 1')

var array1 = [1, 30, 39, 29, 10, 13];
var result = every(array1, function (x) {return x < 100})

console.log(result);
// Expected output: true


console.log('CASE 2')
var array1 = [1, 30, 39, 29, 10, 13];
var result = every(array1, function (x) {return x < 30})
console.log(result);
// Expected output: false

delete Array.prototype.every

function every(array, callback){
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i]) === false){
            return false
        }
    }

    return true
}



console.log('CASE 1')

var array1 = [1, 30, 39, 29, 10, 13];
var result = every(array1, function (x) {return x < 100})

console.log(result);
// Expected output: true


console.log('CASE 3')
var array1 = [];
var result = every(array1, function (x) {return x < 30})
console.log(result);
// Expected output: true