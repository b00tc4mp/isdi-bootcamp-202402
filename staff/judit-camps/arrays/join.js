delete Array.prototype.join

function join(arr, separator) {
    var str = arr[0]
    if (separator == undefined) {
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] == undefined) {
                str = str + ',' + ''
            } else str = str + ',' + arr[i]
        }
    } else {
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] == undefined) {
                str = str + separator + ''
            } else str = str + separator + arr[i]
        }
    }
    return str

}

console.log('CASE 1')
var a = ["Wind", "Water", "Fire"];
var res = join(a);
console.log(res)
// 'Wind,Water,Fire'

console.log('CASE 2')
var res = join(a, ", ");
console.log(res)
// 'Wind, Water, Fire'

console.log('CASE 3')
var res = join(a, " + ");
console.log(res)
// 'Wind + Water + Fire'

console.log('CASE 4')
var res = join(a, "");
console.log(res)
// 'WindWaterFire'

console.log('CASE 5')
var res = join([1, , 3]);
console.log(res)
// '1,,3'

console.log('CASE 6')
var res = join([1, undefined, 3]);
console.log(res)
// '1,,3'


console.log('CASE 7')
const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
    3: 5, // ignored by join() since length is 3
};
var res = join(arrayLike)
console.log(res);
// 2,3,4
console.log(join(arrayLike, "."));
// 2.3.4