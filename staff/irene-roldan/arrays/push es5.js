delete Array.prototype.push; 

function push(array, element1){
    if (arguments.length > 1)
        for (let i = 1; i < arguments.length; i++) {
            array[array.length] = arguments[i]
        }
        
    
    return array.length;
}



console.log('Case 1')

var nums = [100, 200, 300, 400, 500]
var length = push(nums, 600)

console.log(length)
// 6
console.log(nums)
// [100, 200, 300, 400, 500, 600]



console.log('Case 2')

var animals = ['pigs', 'goats', 'sheep'];
var length = push(animals, 'cows');

console.log(length)
// 4
console.log(animals)
// ['pigs', 'goats', 'sheep', 'cows']

console.log('Case 5')

var nums = [10, 20, 30]
var length = push(nums, 40, 50, 60)

console.log(lenghth)
//6
console.log(nums)
//// [10, 20, 30, 40, 50, 60]

console.log('Case 6')

var nums = [10, 20, 30]
var lenghth = var length = push(nums, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200)

console.log(length)
//20
console.log(nums)
// [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]

console.log('Case 7')

var cart = [
    { brand: 'adidas', what: 'socks' },
    { brand: 'nike', what: 'shoes' },
    { brand: 'hat', what: 'skater' }
]

var length = push(cart, { brand: 'mango', what: 'gloves' }, { brand: 'sara', what: 'glasses ' })

console.log(length)
// 5
console.log(cart)
/* [
    { brand: 'adidas', what: 'socks' },
    { brand: 'nike', what: 'shoes' },
    { brand: 'hat', what: 'skater' },
    { brand: 'mango', what: 'gloves' }, 
    { brand: 'sara', what: 'glasses '}
] */