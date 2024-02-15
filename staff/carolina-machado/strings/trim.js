
function trim(string) {
    // TODO implement me
let trimString = "";

for (let i = 0; i < string.length; i++) {
    if (string[i] !== '') {

        trimString += string;

    }
return trimString 
}

}

// CASE 1

//let s = '  hola mundo   '

//let result = trim(s)

//console.log(result)
// 'hola mundo'

// CASE 2

var s = ' \n\s\r hola mundo \n\s\r '

var result = trim(s)
console.log(result)
// 'hola mundo'