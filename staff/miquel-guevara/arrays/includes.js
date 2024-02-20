function includes(array, value, fromIndex) {
  var targetIndex = 0

  if (arguments.length > 2)
      if (fromIndex > -1)
          targetIndex = fromIndex
      else
          targetIndex = array.length + fromIndex

  for (var i = targetIndex; i < array.length; i++) {
      var element = array[i]

      if (element === value)
          return true
  }

  return false
}

console.log('CASE 1')

var nums = [100, 200, 300, 400, 500]

var result = includes(nums, 800)

console.log(result)
// false

console.log('CASE 2')

var animals = ['elephants', 'dogs', 'cats', 'cows']

var result = includes(animals, 'cats')

console.log(result)
// true

console.log('CASE 3')

var nums = [10, 20, 30]

var result = includes(nums, 20, 4)

console.log(result)
// false

console.log('CASE 4')

var nums = [10, 20, 30]

var result = includes(nums, 10, 1)

console.log(result)
// true

console.log('CASE 5')

var animals = ['elephants', 'dogs', 'cats', 'cows']

var result = includes(animals, 'cows', 2)

console.log(result)
// true

console.log('CASE 6')

var animals = ['elephants', 'dogs', 'cats', 'cows']

var result = includes(animals, 'fox', 2)

console.log(result)
// false


console.log('CASE 7')

var animals = ['elephants', 'dogs', 'cats', 'cows']

var result = includes(animals, 'dogs', -3)

console.log(result)
// true

console.log('CASE 8')

var animals = ['elephants', 'dogs', 'cats', 'cows']

var result = includes(animals, 'goats', -2)

console.log(result)
// false