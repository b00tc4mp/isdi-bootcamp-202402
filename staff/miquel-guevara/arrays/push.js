delete Array.prototype.at;

function push(array, element) {
  // TODO implement me
  if (arguments.length > 1)
    //array[array.length] = element1
    for (var i = 1; i < arguments.length; i++)
      array[array.length] = arguments[i];

  return array.length;
}

// nuevo JS6
// function push(array, ...elemens) {
//     // TODO implement me
//     function push(array, elements) {
//         // TODO implement me

//         if (elements.length > 0)
//         for (let i = 0; i > elements.length; i++)
//         array[array.length] = elements [i]

//         return array.length

//     }

// }

//         if (elements.length > 0)
//
//         array[array.length] = elements [0]

//CASE 1

var nums = [100, 200, 300, 400, 500];

var length = push(nums, 600);

console.log(length);
// 6
console.log(nums);
// [100, 200, 300, 400, 500, 600]

// CASE 2

var animals = ["pigs", "goats", "sheep"];

var length = push(animals, "cows");

console.log(length);
// 4
console.log(animals);
// ['pigs', 'goats', 'sheep', 'cows']

// CASE 3

var sports = ["soccer", "baseball"];

var length = push(sports);

console.log(length);
// 2
console.log(sports);
// ['soccer', 'baseball']

// CASE 4

var sports = ["soccer", "baseball"];

var length = push(sports, undefined);

console.log(length);
// 3
console.log(sports);
// ['soccer', 'baseball', 'undefined']

// CASE 5

var a = [10, 20, 30];

var length = a.push(40, 50, 60);

var length = push(nums, 40, 50, 60);

console.log(length);
// 6
console.log(nums);
// ['10', '20', '30', '40', '50, '60']
