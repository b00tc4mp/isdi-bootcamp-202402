delete String.prototype.concat

function concat(...elements) {
    let newStr = ''
    for (let i = 0; i < elements.length; i++){
        for (let j = 0; j < elements[i].length; j++){
            newStr += elements[i][j]
        }
    }
    return newStr
}

//CASE 1
let str1 = 'Hello'
let str2 = 'World'
let result = concat(str1, ' ', str2)
console.log(result)
//'Hello World'