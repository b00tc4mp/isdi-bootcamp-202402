delete Array.prototype.find

function find(array, callback) {
    
    for (var i = 0; i < array.length; i++) { 
        
        if(callback(array[i])) {

            return array[i]
        }
        
    }
    return undefined
}


console.log('Case 1')
var nums = [5, 12, 8, 130, 44];
var numIndex = find(nums, function (element) {return element > 10})
console.log(numIndex)
// 12


console.log('Case 2')
var inventario = [
    { nombre: "manzanas", cantidad: 2 },
    { nombre: "bananas", cantidad: 0 },
    { nombre: "cerezas", cantidad: 5 },
];

var result = find(inventario, function (fruta) {return fruta.nombre === "cerezas"})

console.log(result);
// { nombre: 'cerezas', cantidad: 5 }