// crea y devuelve una nueva cadena concatenando todos los elementos de esta matriz, separados por comas o una cadena separadora especificada. Si la matriz tiene solo un elemento, ese elemento se devolverá sin utilizar el separador.

delete Array.prototype.join;

function join(arr, separator) {
  var str = arr[0];
  if (separator == undefined) {
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] == undefined) {
        str = str + "," + "";
      } else str = str + "," + arr[i];
    }
  } else {
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] == undefined) {
        str = str + separator + "";
      } else str = str + separator + arr[i];
    }
  }
  return str;
}

console.log("CASE 1");
var a = ["Wind", "Water", "Fire"];
var res = join(a);
console.assert(res === "Wind,Water,Fire", "Wind,Water,Fire");
// 'Wind,Water,Fire'

console.log("CASE 2");
var res = join(a, ", ");
console.assert(res === "Wind, Water, Fire", "Wind, Water, Fire");
// 'Wind, Water, Fire'

console.log("CASE 3");
var res = join(a, " + ");
console.assert(res === "Wind + Water + Fire", "Wind + Water + Fire");
// 'Wind + Water + Fire'

console.log("CASE 4");
var res = join(a, "");
console.assert(res === "WindWaterFire", "WindWaterFire");
// 'WindWaterFire'

console.log("CASE 5");
var res = join([1, , 3]);
console.assert(res === "1,,3", "1,,3");
// '1,,3'

console.log("CASE 6");
var res = join([1, undefined, 3]);
console.assert(res === "1,,3", "1,,3");
// '1,,3'
