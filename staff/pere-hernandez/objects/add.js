function push (object, value){
    object[object.length] = value
    object.length++
}

console.log('CASE 1')

let colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}
let result = push(colors, 'yellow')
console.log(result)
//4
console.log(colors)
/*{
    0: 'red',
    1: 'blue',
    2: 'green',
    3: 'yellow',
    length: 4
}*/