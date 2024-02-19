delete Array.prototype.push

function push(array, ...elements) {
    // todos los argumentos que vengan detrás de se meterán
    if (elements.length > 1);
    array[array.length] = elements[0]
    // si yo detecto que elements tiene algún elemento lo metemos
    // 
    return array.length

}


// CASE 1
const nums = [100, 200, 300, 400, 500]
// vamos a pasar los var que no queremos cambiar a const, para que se quede el mismo valor y no lo podamos reasignar (no puedes declararlo 2 veces)
// const y let existen dentro de 1 bloque, var puedes trabajarlo fuera del bloque
// var a = [10,20,30]
// for (var i = 0; i < array.length; i++) {
//   con var puedes llamar a i, con let te daría error porque está dentro de for


{  // para que funcionen los keywords const, metemos corchetes para crear bloques
    //así al no tener var que nos permitiría pasarnos el scope por el forro, los dejamos ordenados y funcionales
    // tu no puedes llamar a const dentro de este bloque, con var podrías
    // var es blocscope sólo en funciones: no podemos sacarlo de dentro de las funciones
    // en un if si que podriamos, pero let y const no nos dejaría
    const nums = [100, 200, 300, 400, 500]
    const length = push(nums, 600)

    console.log(length)
    // 6
    console.log(nums)
    // [100, 200, 300, 400, 500, 600]
}

// CASE 2
{
    const animals = ['pigs', 'goats', 'sheep'];

    const count = push(animals, 'cows');

    console.log(count);
    // 4
    console.log(animals);
    // ["pigs", "goats", "sheep", "cows"]
}
// CASE 3
{
    const sports = ['soccer', 'baseball']

    const length = push(sports)

    console.log(length)
    // 2
    console.log(sports)
    // ['soccer', 'baseball']
}

// CASE 4
{
    const sports = ['soccer', 'baseball']

    const length = push(sports, undefined)

    console.log(length)
    // 3
    console.log(sports)
    // ['soccer', 'baseball', undefined]
}

//CASE 5
{
    const a = [10, 20, 30];

    const length = a.push[40, 50, 60];

    console.log(length);
    // 6
    console.log(nums);
    // [10,20,30,40,50,60]
}

// function push(array, ...elements) {
    
//     if (elements.length > 1);
//     array[array.length] = elements[0]
    
//     return array.length

// }