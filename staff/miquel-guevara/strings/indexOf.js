delete String.prototype.indexOf;

function indexOf(string, searchString) {
  // TODO implement me
  var count = 0;
  var resultposition;

  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < searchString.lenght; j++)
      if (string[i] === searchString[j]) {
        count++;
        if (count === 1) resultposition = i;
      }
  }
  if ((count = searchString.length)) {
    return resultposition;
  } else {
    return -1;
  }
}

// CASE 1

// var s = "hola mundo";

// var index = indexOf(s, "ola");

// console.log(index);
// 1

// CASE 2

// var s = "hola mundo";

// var index = indexOf(s, "olaf");

// console.log(index);
// -1
