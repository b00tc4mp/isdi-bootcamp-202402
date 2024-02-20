//El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

delete Array.prototype.push;

function push(array, element1) {
  // TODO implement me

  if (arguments.length > 1)
      array[array.length] = element1

  return array.length
}



console.log('CASE 1')

var nums = [100, 200, 300, 400, 500]

var length = push(nums, 600)

console.log(length)
// 6
console.log(nums)
// [100, 200, 300, 400, 500, 600]

console.assert(length === 6, '6')

console.assert(nums === 100, 200, 300, 400, 500, 600, '100', '200', '300', '400', '500', '600')


console.log('CASE 2')

var animals = ['pigs', 'goats', 'sheep']

var length = push(animals, 'cows')

console.log(length)
// 4
console.log(animals)
// ['pigs', 'goats', 'sheep', 'cows']

console.assert(length === 4, '4')

console.assert(animals === 'pigs', 'goats', 'sheep', 'cows')

console.log('CASE 3')

var sports = ['soccer', 'baseball']

var length = push(sports)

console.log(length)
// 2
console.log(sports)
// ['soccer', 'baseball']

console.assert(length === 2, '2')

console.assert(sports === 'soccer', 'baseball')


console.log('CASE 4')

var sports = ['soccer', 'baseball']

var length = push(sports, undefined)

console.log(length)
// 3
console.log(sports)
// ['soccer', 'baseball', undefined]

console.assert(length === 3, '3')

console.assert(sports === 'soccer', 'baseball', undefined)

console.log('CASE 5')

var nums = [10, 20, 30]

var length = nums.push(40, 50, 60)

console.log(length)
// 6
console.log(nums)
// [10, 20, 30, 40, 50, 60]

console.assert(length === 6, '6')

console.assert(sports === 10, 20, 30, 40, 50, 60, '10', '20', '30', '40', '50', '60')