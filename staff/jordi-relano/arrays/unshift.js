function unshift(array, ...parameters) {
    var finalLength = array.length + parameters.length;
    for (let i = array.length - 1; i > -1; i--) {
        array[i + parameters.length] = array[i]
    }
    for (let i = 0; i < parameters.length; i++) {
        array[i] = parameters[i]
    }
    return finalLength
}






const array1 = [1, 2, 3];
console.log(unshift(array1, 4, 5)); // Expected output: 5  console.log(array1); // Expected output: Array [4, 5, 1, 2, 3]