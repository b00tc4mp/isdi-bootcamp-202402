/**
 * Extracts an element in an iterable object and returns it.
 *
 * @param object - The iterable object to mutate. 
 * @param value - The value to extract.
 * 
 * @throws {TypeError} When object is not an object.
 * @throws {TypeError} When callback is not a function.
 */

function extract(object, callback){
    if (object instanceof Object === false)
        throw new TypeError(object + ' is not an Object')

    if (callback instanceof Function === false)
        throw new TypeError(callback + ' is not a Function')        
    
    var extracted = {length: 0}
    var count = 0
    
    for (var i = 0; i < object.length; i++){
        var elem = callback(object[i])
        
        if (elem){                
            extracted[count] = object[i]
            count++
            extracted.length = count
        } else 
            object[i - count] = object[i]
        
    }
    
    for (var i = count; i < object.length; i++)
        delete object[i]

    object.length -= count   
    return extracted
}


console.log('CASE 1')

var cartoons = {
    0: {name: 'Sonic', color: 'blue'},
    1: {name: 'Goku', color:'orange'},
    2: {name: 'Mario', color:'red'},
    3: {name: 'Kirby', color:'pink'},
    4: {name: 'Naruto', color: 'orange'},
    5: {name: 'Charizard', color: 'orange'},
    length: 6
}

var result = extract(cartoons, function (result) {
    return result.color === 'orange'
})

console.log(result)
/*{
    0: {name: 'Goku', color: 'orange'},
    1: {name: 'Naruto', color: 'orange'},
    2: {name: 'Charizard', color: 'orange'},
    length: 3
}*/
console.log(cartoons)
/*{
    0: {name: 'Sonic', color:'blue'},
    1: {name: 'Mario', color:'red'},
    2: {name: 'Kirby', color:'pink'},
    length: 3
}*/


console.log('CASE 2')

result = extract(cartoons, function (result) {
    return result.name === 'Yoshi'
})

var cartoons1 = {
    0: {name: 'Sonic', color: 'blue'},
    1: {name: 'Goku', color:'orange'},
    2: {name: 'Mario', color:'red'},
    3: {name: 'Kirby', color:'pink'},
    4: {name: 'Naruto', color: 'orange'},
    5: {name: 'Charizard', color: 'orange'},
    length: 6
}

console.log(result)
//{length: 0}
console.log(cartoons1)
/*{
    0: {name: 'Sonic', color: 'blue'},
    1: {name: 'Goku', color:'orange'},
    2: {name: 'Mario', color:'red'},
    3: {name: 'Kirby', color:'pink'},
    4: {name: 'Naruto', color: 'orange'},
    5: {name: 'Charizard', color: 'orange'},
    length: 6
}*/


console.log('CASE 3')
var str = 'Cartoons'
try {
    extract(str, function (result) {
        return result.name === 'Pac-Man'
    })
} catch (error) {
    console.log(error)
    //Cartoons is not an Object
}


console.log('CASE 4')
try {
    extract(cartoons, str) 
} catch (error) {
    console.log(error)
    //Cartoons is not a Function
}