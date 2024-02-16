delete Array.prototype.indexOf;
function indexOf(array, searchelement) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === searchelement) {
      return i;
    }
  }
  return -1;
}

// CASE 1

var fruits = ["apple", "banana", 12, "kiwi", "pineapple"];

var element = 12;

var numero = indexOf(fruits, element);

console.log(numero);

// // CASE 2

// var animals = ["pigs", "goats", "sheep", "cows"];

// var animal = pop(animals);

// console.log(animal);
// // 'cows'
// console.log(animals.length);
// // 3
// console.log(animals);
// // ['pigs', 'goats', 'sheep']

// // CASE 3

// var sports = ["soccer", "baseball"];

// var sport = pop(sports);

// console.log(sport);
// // 'baseball'
// console.log(sports.length);
// // 1
// console.log(sports);
// // ['soccer']

// // CASE 4

// var sports = [];

// var sport = pop(sports);

// console.log(sport);
// // undefined
// console.log(sports.length);
// // 0
// console.log(sports);
// // []
