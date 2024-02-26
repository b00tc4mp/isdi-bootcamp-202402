/**
 * Extracts an element in an iterable object and returns it.
 *
 * @param object - The iterable object to mutate.
 * @param value - The value to extract.
 *
 * @throws {TypeError} When object is not an object.
 * @throws {TypeError} When callback is not a function.
 */

function extract(object, callback) {
  var newObj = {length: 0};
  var newIndex = -1;
  for (var i = 0; i < object.length; i++) {
    if (callback(object[i])) {
      newObj = object[i];
      newIndex = i;
    }
  }
  if (newIndex != -1) {
    for (var j = newIndex; j < object.length; j++) {
      object[j] = object[j + 1];
    }
    object.length--;
    delete object[object.length];
  }
 
  return newObj;
}

console.log("CASE 1");

var animals = {
  0: { name: "fox", weigth: 20 },
  1: { name: "elephant", weigth: 100 },
  2: { name: "dog", weigth: 25 },
  3: { name: "cat", weigth: 10 },
  length: 4,
};

var result = extract(animals, function (result) {
  return result.weigth === 20;
});

console.log(result);
//{name: 'fox', weigth:20}
console.log(animals);
/*{
    0: {name: 'elephant', weigth: 100},
    1: {name: 'dog', weigth:25},
    2: {name: 'cat', weigth:10},
    length: 3
}*/

console.log("CASE 2");

result = extract(animals, function (result) {
  return result.name === "beatles";
});

console.log(result);
//{length:0}
console.log(animals);
// {
//     0: {name: 'elephant', weigth: 100},
//     1: {name: 'dog', weigth:25},
//     2: {name: 'cat', weigth:10},
//     length: 3
// }
