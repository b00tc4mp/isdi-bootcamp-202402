//El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

delete Array.prototype.filter

function filter(array, callback) {
    //TODO implement me
    var newArray = []
    
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArray[newArray.length] = array[i]
        }
    }
    return newArray
}
   

console.log("CASE 1");
var words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

var result = filter(words, function (x) {return x.length > 6 })
console.log(result);
// Expected output: ["exuberant", "destruction", "present"]

console.assert(result === "exuberant", "destruction", "present")
//"exuberant", "destruction", "present"

console.assert(words.length === 5, '5')
// [5]


console.log("CASE 2");
var words = [25, 98, 64, 96, 35];

var result = filter(words, function (x) {return x > 30 })
console.log(result);
// Expected output: [98, 65, 96, 35]

console.assert(result === 98, 65, 96, 35)
//[98, 65, 96, 35]


console.assert(nums[0] === 25, '25')
console.assert(nums[1] === 98, '98')
console.assert(nums[2] === 65, '65')
console.assert(nums[3] === 96, '96')
console.assert(nums[4] === 35, '35')

//[25, 98, 64, 96, 35];


console.assert(nums.length === 5, '5')
// [5]