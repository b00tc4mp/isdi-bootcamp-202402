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

console.assert(length === 6, 6)
// 6
console.assert(nums[0] === 100, 100)
console.assert(nums[1] === 200, 200)
console.assert(nums[2] === 300, 300)
console.assert(nums[3] === 400, 400)
console.assert(nums[4] === 500, 500)
console.assert(nums[5] === 600, 600)
// [100, 200, 300, 400, 500, 600]



console.log('Case 2')

var animals = ['pigs', 'goats', 'sheep'];
var length = push(animals, 'cows');

console.assert(length===4, 4)
// 4
console.assert(animals[0]==='pigs', 'pigs')
console.assert(animals[1]==='goats', 'goats')
console.assert(animals[2]==='sheep', 'sheep')
console.assert(animals[3]==='cows', 'cows')

// [pigs', 'goats', 'sheep', 'cows']

console.log('Case 5')

var nums = [10, 20, 30]
var length = push(nums, 40, 50, 60)

console.assert(lenghth === 6, 6)
//6
console.assert(
    nums[0] === 10 &&
    nums[1] === 20 &&
    nums[2] === 30 &&
    nums[3] === 40 &&
    nums[4] === 50 &&
    nums[5] === 60,
    'Assertion failed: Unexpected result'
);

console.log('Case 6')

var nums = [10, 20, 30]
var lenghth = push(nums, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200)

console.assert(length===20)
//20
console.log(nums[0] === 10 &&
    nums[1] === 20 &&
    nums[2] === 30 &&
    nums[3] === 40 &&
    nums[4] === 50 &&
    nums[5] === 60 &&
    nums[6] === 70 &&
    nums[7] === 80 &&
    nums[8] === 90 &&
    nums[9] === 100 &&
    nums[10] === 110 &&
    nums[11] === 120 &&
    nums[12] === 130 &&
    nums[13] === 140 &&
    nums[14] === 150 &&
    nums[15] === 160 &&
    nums[16] === 170 &&
    nums[17] === 180 &&
    nums[18] === 190 &&
    nums[19] === 200,
    'Assertion failed: Unexpected result'
);
// [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]

console.log('Case 7')

var cart = [
    { brand: 'adidas', what: 'socks' },
    { brand: 'nike', what: 'shoes' },
    { brand: 'hat', what: 'skater' }
]

var length = push(cart, { brand: 'mango', what: 'gloves' }, { brand: 'sara', what: 'glasses ' })

console.assert(length===5)
// 5
console.assert(cart.length === 5 &&
    cart[0].brand === 'adidas' && cart[0].what === 'socks' &&
    cart[1].brand === 'nike' && cart[1].what === 'shoes' &&
    cart[2].brand === 'hat' && cart[2].what === 'skater' &&
    cart[3].brand === 'mango' && cart[3].what === 'gloves' &&
    cart[4].brand === 'sara' && cart[4].what === 'glasses',
    'Assertion failed: Unexpected result'
);
/* [
    { brand: 'adidas', what: 'socks' },
    { brand: 'nike', what: 'shoes' },
    { brand: 'hat', what: 'skater' },
    { brand: 'mango', what: 'gloves' }, 
    { brand: 'sara', what: 'glasses '}
] */