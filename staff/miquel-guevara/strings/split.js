delete String.prototype.split;

function split(string, separator) {
  // TODO implement me
  var words = [];
  var count = 0;
  var word = "";
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== separator) {
      word = word + string[i];
    } else {
      words[count] = word;
      count++;
      word = "";
    }
  }
  words[count] = word;
  return words;
}

// CASE 1

var s = "hola mundo";

var words = split(s, " ");

console.log(words);
// ['hola', 'mundo']

var s = "hola mundo";

var word = s[(0, 0)];

// var words = split(s, ' ')

console.log(words);
