
function from(arrayLike, mapFn, thisArg) {
    resultArray = []

    if( arguments.length === 1){
        for (let i = 0; i < arrayLike.length; i++) 
            for (let j = 0; j < arrayLike[i].length; j++) {
                debugger
                resultArray[i] = arrayLike[i][j];
                
            }
    }else if(arguments.length === 2){
        debugger
        for (let i = 0; i < arrayLike.length; i++)
            resultArray[i] = mapFn(arrayLike[i])
         
        }
        return resultArray
    }



// CASE 1
var arrayLike = "foo"
var result = from(arrayLike);
console.log(result);
// Array ["f", "o", "o"]


console.log(from([1, 2, 3], (x) => x + x))
// Array [2, 4, 6]