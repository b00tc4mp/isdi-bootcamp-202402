/**
 * 
 * @param {*} object 
 * @param {*} callback 
 */
function extract(object, callback) {
    var extracted
    var indexExtracted
    for (var i = 0; i < object.length; i++) {
        if (callback(object[i])) {
            extracted = object[i]
            indexExtracted = i

            break
        }
    }
    for (var i = indexExtracted; i < object.length - 1; i++) {
        object[i] = object[i + 1]
    }
    object.length--
    delete object[object.length]

    return extracted
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

//console.log(users)
/*
{
    0: { name: 'Wendy', age: 19 },
    1: { name: 'Peter', age: 20 },
    2: { name: 'Campa', age: 30 },
    3: { name: 'James', age: 40 },
    length: 4
}
*/

console.assert(user.name === 'Pepito')
console.assert(user.age === 50)

console.assert(users[0].name === 'Wendy')
console.assert(users[0].age === 19)
console.assert(users[1].name === 'Peter')
console.assert(users[1].age === 20)
console.assert(users[2].name === 'Campa')
console.assert(users[2].age === 30)
console.assert(users[3].name === 'James')
console.assert(users[3].age === 40)