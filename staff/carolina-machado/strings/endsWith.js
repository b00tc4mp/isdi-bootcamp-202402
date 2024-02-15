

function endsWith(string, searchString) {

    for (let i = string.length - 1; i >= string.length - searchString.length; i--) {
        for (let j = searchString.length - 1; j >= 0; j--) {
            if (string[i] === searchString[j]) {
                return true
            } else {
                return false
            }
        }

    }
}

// CASE 1

var s = 'Carolina'

var result = endsWith(s, 'lino')

console.log(result)
// true

// CASE 2

//var s = 'hola mundo'

//var result = endsWith(s, 'mundo')

//console.log(result)
// false