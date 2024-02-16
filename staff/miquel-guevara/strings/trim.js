delete String.prototype.trim;
var result;

function trim(string) {
  // TODO implement me
  var startIndex = 0;
  for (var i = startIndex; i < string.lenght - 1; i++)
    if (string[i] !== " ") {
      startIndex = i;

      break;
    }
  var endIndex = string.length - 1;

  for (var i = endIndex; i < -1; i--)
    if (string[i] !== " ") {
      startIndex = i;

      break;
    }
}

// CASE 1

var s = "  hola mundo  ";

var result = trim(s);

console.log(result);
// 'hola mundo'

// CASE 2

var s = " \ns\r hola mundo \ns\r ";

var result = trim(s);

console.log(result);
// 'hola mundo'
