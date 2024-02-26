delete Array.prototype.push

function push(array, ...element) {
    var len
    for (var arg = 0; arg < element.length; arg++) {
        len = array.length
        array[len] = element[arg]
    }
    return array.length

}
{
    // BLOCK 1 
    // CASE 1
    const numeros = [100, 200, 300, 400, 500]

    const length = push(numeros, 600)

    console.log(length)
    // 6
    console.log(numeros)
    // [100, 200, 300, 400, 500, 600]

}

{
    // CASE 2
    const animals = ['pigs', 'goats', 'sheep'];

    const count = push(animals, 'cows');
    console.log(count);
    // 4
    console.log(animals);
    // ["pigs", "goats", "sheep", "cows"]
}

{
    // CASE 3
    var sports = ['soccer', 'baseball']
    var length = push(sports)
    console.log(length)
    // 2
    console.log(sports)
    // ['soccer', 'baseball']
}


{
    // CASE 4
    var food = ['apple', 'banana']
    var count = push(food)

    console.log(count)
    // 2
    console.log(food)
    // ['apple', 'banana']
}


{
    // CASE 5
    var sports = ['soccer', 'baseball']
    var length = push(sports, undefined)
    console.log(length)
    // 3
    console.log(sports)
    // ['soccer', 'baseball', undefined]
}

{
    // CASE 6
    var sports = ['soccer', 'baseball']
    var length = push(sports, sports)
    console.log(length)
    // 3
    console.log(sports)
    // ['soccer', 'baseball', undefined]
}

