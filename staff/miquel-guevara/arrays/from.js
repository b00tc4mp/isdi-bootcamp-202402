delete Array.prototype.from;

function from(array, mapForm) {
  // TODO implement me
  var newArray = []
    for(var i = 0; i < array.length; i++){ 
    newArray[i] = array[i]}

    return newArray

}

//CASE 1
var array = "car";
var func = from(array);
console.log(func);
//deberia devolver: ['c', 'a', 'r']

//CASE 2
var arr = [1, 2, 3];
var func = from(arr);
console.log(from([1, 2, 3], (x) => x + x));
// deberia devolver: Array [2, 4, 6]















// function from(arr, mapForm) {
//     var newArr = [];
//     if (mapForm === undefined) {
//       for (var i = 0; i < arr.length; i++) {
//         newArr[i] = arr[i];
//       }
//       return newArr;
//     } else {
//       for (var i = 0; i < arr.length; i++) {
//         newArr[i] = mapForm(arr[i]);
//       }
//     }
//     return newArr;
//   }