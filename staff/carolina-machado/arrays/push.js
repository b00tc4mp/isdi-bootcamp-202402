

function pushy(array, element1) {
    // TODO implement me

    if (arguments.length > 1)
        for (var i = 1; i < arguments.length; i++)
            array[array.length] = arguments[i]

    return array.length
}

console.log('CASE 1')

var nums = [100, 200, 300, 400, 500]

var length = pushy(nums, 600)

//console.log(length)
// 6
//console.log(nums)
// [100, 200, 300, 400, 500, 600]


console.assert(nums[0] === nums[0], '100')
console.assert(nums[1] === nums[1], '200')
console.assert(nums[2] === nums[2], '300')
console.assert(nums[3] === nums[3], '400')
console.assert(nums[4] === nums[4], '500')
console.assert(nums[5] === nums[5], 'pushed: 600')
console.assert(length === 6, '6')



console.log('CASE 2')

var animals = ['pigs', 'goats', 'sheep']

var length = pushy(animals, 'cows')

//console.log(length)
// 4
//console.log(animals)
// ['pigs', 'goats', 'sheep', 'cows']


console.assert(length === 4,'4')

console.assert(animals[0] === animals[0], 'pigs')
console.assert(animals[1] === animals[1], 'goats')
console.assert(animals[2] === animals[2], 'sheep')
console.assert(animals[3] === animals[3], 'cows')


console.log('CASE 3')

var sports = ["soccer", "baseball"]
var length = pushy(sports, undefined)

//console.log(length)
// 3
//console.log(sports)
// ['soccer', 'baseball', undefined]


console.assert(length === 3, '3')

console.assert(sports[0] === sports[0], 'soccer')
console.assert(sports[1] === sports[1], 'baseball')
console.assert(sports[2] === sports[2], undefined)


console.log('CASE 4')

var sports = ['soccer', 'baseball']
var nums = [10, 20, 30]
var length = pushy(nums, 40, 50, 60)


console.assert(length === 6, '6')

console.assert(nums[0] === nums[0], '10')
console.assert(nums[1] === nums[1], '20')
console.assert(nums[2] === nums[2], '30')
console.assert(nums[3] === nums[3], '40')
console.assert(nums[4] === nums[4], '50')
console.assert(nums[5] === nums[5], '60')


console.log('CASE 5')

var nums = [10, 20, 30]

var length = pushy(nums, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130)

//console.log(length)
// 20
//console.log(nums)
// [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130]


console.assert(nums[0] === nums[0], '10')
console.assert(nums[1] === nums[1], '20')
console.assert(nums[2] === nums[2], '30')
console.assert(nums[3] === nums[3], '40')
console.assert(nums[4] === nums[4], '50')
console.assert(nums[5] === nums[5], '60')
console.assert(nums[6] === nums[6], '70')
console.assert(nums[7] === nums[7], '80')
console.assert(nums[8] === nums[8], '90')
console.assert(nums[9] === nums[9], '110')
console.assert(nums[10] === nums[10], '120')
console.assert(nums[11] === nums[11], '130')



console.log('CASE 6')

var cart = [
    { brand: 'adidas', what: 'socks' },
    { brand: 'nike', what: 'shoes' },
    { brand: 'hat', what: 'skater' }
]


var length = pushy(cart, { brand: 'mango', what: 'gloves' }, { brand: 'sara', what: 'glasses ' })

//console.log(length)
// 5
//console.log(cart)
/* [
    { brand: 'adidas', what: 'socks' },
    { brand: 'nike', what: 'shoes' },
    { brand: 'hat', what: 'skater' },
    { brand: 'mango', what: 'gloves' }, 
    { brand: 'sara', what: 'glasses '}
] */

console.assert(cart[0].brand === "adidas");
console.assert(cart[0].what === 'socks');
console.assert(cart[1].brand === "nike");
console.assert(cart[1].what === 'shoes');
console.assert(cart[2].brand === "hat");
console.assert(cart[2].what === 'skater');
console.assert(cart[3].brand === "mango");
console.assert(cart[3].what === 'gloves');
console.assert(cart[4].brand === "sara");
console.assert(cart[4].what === 'glasses');