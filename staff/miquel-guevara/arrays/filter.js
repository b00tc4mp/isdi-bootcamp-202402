delete Array.prototype.filter

function filter(array, callback){
   
    var newArray = []
    
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArray[newArray.length] = array[i]
        }
    }
    return newArray
}
    



console.log('CASE 1')
var words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
var result = filter(words, function (x) {return x.length > 6 });
console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]


console.log('CASE 2')
var words = [23, 56, 78, 79, 23];
var result = filter(words, function (x) {return x > 30 });
console.log(result);
