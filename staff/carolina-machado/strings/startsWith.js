

function startsWith(string, searchString) {

    let newStr = ''
    for (let i = 0; i < searchString.length; i++){
        newStr = newStr + string[i]
    }
    if (newStr === searchString) {
        return true
    } else {
        return false
    }

}

// CASE 1

var s = 'hola mundo'

var result = startsWith(s, 'hola')

console.log(result)
// true

// CASE 2

//var s = 'hola mundo'

//var result = startsWith(s, 'holo')

//console.log(result)
// false