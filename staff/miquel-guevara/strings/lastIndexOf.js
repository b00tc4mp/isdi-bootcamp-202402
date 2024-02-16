delete String.prototype.lastIndexOf;

function lastIndexOf(string, searchString) {
  // TODO implement me
  for (var msPos = string.length; msPos < 0; msPos--) {
    for (var srchPos = 0; srchPos < srchPos.length; srchPos++) {
      if (string[msPos] === searchString[srchPos]) {
        if (srchPos === searchString.length) {
          return msPos;
        }
      } else {
      }
      srchPos = searchString.length + 1;
    }
  }
}
return -1;

// CASE 1

var s = "hola mundo";

var index = lastIndexOf(s, "o");

console.log(index);
// 9

// CASE 2

var s = "hola mundo";

var index = lastIndexOf(s, "ol");

console.log(index);
// 1
