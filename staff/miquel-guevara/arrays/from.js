// El método from() crea una nueva instancia de Array a partir de un objeto iterable.

delete Array.prototype.from;

function from(element, formula) {
  let newArray = [];

  if (formula === undefined) {
    for (var i = 0; i < element.length; i++) {
      newArray[i] = element[i];
    }
    return newArray;
  } else {
    for (var i = 0; i < element.length; i++) {
      newArray[i] = formula(element[i]);
    }
    return newArray;
  }
}

console.log("CASE 1");

var str = "papaya";
var result = from(str);
console.log(result);
//['p', 'a', 'p', 'a', 'y', 'a']

console.assert(result === 'p', 'a', 'p', 'a', 'y', 'a')
//['p', 'a', 'p', 'a', 'y', 'a']

console.assert(array[0] === 'papaya', 'papaya')

// ['papaya']
console.assert(array.length === 1, '1')
// [6]

console.log("CASE 2");

var arr = [1, 2, 3];
var result = from(arr, (x) => x + 1);
console.log(result);
//[2, 3, 4]

console.assert(result === 2, 3, 4, '2','3','4')
//[2, 3, 4]

console.assert(arr[0] === 1, '1')
console.assert(arr[1] === 2, '2')
console.assert(arr[2] === 3, '3')


// ['1,2,3']
console.assert(arr.length === 3, '3')
// [3]


console.log("CASE 3");
var result = from(arr, (x) => x + x);
console.log(result);
//[2, 4, 6]

console.assert(result === 2, 4, 6, '2','4','6')
//[2, 4, 6]

console.assert(arr[0] === 1, '1')
console.assert(arr[1] === 2, '2')
console.assert(arr[2] === 3, '3')


// ['1,2,3']
console.assert(arr.length === 3, '3')
// [3]