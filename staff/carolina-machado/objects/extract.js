/**
 * Extracts an element that matches the condition from an iterable object.
 *
 * @param object - The iterable object to mutate. 
 * @param index - The index from which to extract a value.
 * 
 * @throws {TypeError} When object is not an object, or when index is not a number.
 */
function extract(object, callback) {
    function extract(object, callback){
        if (object instanceof Object === false)
            throw new TypeError(object + ' is not an Object')
    
        else if (callback instanceof Function === false)
            throw new TypeError(callback + ' is not a Function')
            
        else {
            let arrayObj = []
            let found = -1
            
            for (let i = 0; i < object.length; i++){
                let elem = callback(object[i])
                if (elem === false && found === -1){
                    arrayObj[arrayObj.length] = object[i]
                } else if (elem && found === -1){
                    found = object[i]
                } else
                    arrayObj[arrayObj.length] = object[i]
            }
    
            if (found !== -1){
                for (let i = 0; i < arrayObj.length; i++){
                    object[i] = arrayObj[i]
                } 
                delete object[object.length -1]
                object.length--
            }    
            return found
        }
    }
        
}

console.log('CASE 1: extract user pepito form users')

var users = {
    0: { name: 'Wendy', age: 19 },
    1: { name: 'Peter', age: 20 },
    2: { name: 'Pepito', age: 50 },
    3: { name: 'Campa', age: 30 },
    4: { name: 'James', age: 40 },
    length: 5
}

var user = extract(users, function (user) {
    return user.name === 'Pepito'
})

console.log(user)
// { name: 'Pepito', age: 50 }

console.log(users)
/*
{
    0: { name: 'Wendy', age: 19 },
    1: { name: 'Peter', age: 20 },
    2: { name: 'Campa', age: 30 },
    3: { name: 'James', age: 40 },
    length: 4
}
*/
