delete String.prototype.concat;

function concat(...arr) {
  var result = "";

  if (arr.length === 0) {
    return result;
  }

  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}

//CASE 1
var str1 = "Pol y Jan";
var str2 = " Guevara";

var str = concat(str1, " ", str2);
console.log(str);
//OUTPUT "Pol y Jan Guevara"

//CASE 2
var num = 10;
var str1 = "naranjas";

var str = concat(num, str1, " ");
console.log(str);
//OUTPUT "10 naranjas"

//CASE 3
var str1 = "Miky";
var str2 = "Guevara";

var str = concat(str2, " & ", str1);
console.log(str);
//OUTPUT "Guevara & Miky"
