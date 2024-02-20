//El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
delete Array.prototype.slice

function slice(array, start, end) {
    //TODO implement me

//crear una nueva array
var newArray = [];
//creamos un for para ir desde el principio hasta el final
if (start >= 0 && end <= array.length) {
    for (var i = start; i < end; i++){
        newArray[i -start] = array[i];
        } 
}



return newArray;
}





//CASE 1
var array = [1, 2, 3, 4, 5];
var result = slice (array, 1, 4);
console.log(result); 
// Output: [2, 3, 4]

//CASE 2
var array = [1, 2, 3, 4, 5];
var result = slice (array, 1, 10);
console.log(result); 
// Output: []