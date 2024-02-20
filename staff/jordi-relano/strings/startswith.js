function startsWith(string, searchString) {
    var newArray = "";
    for (var i = 0; i < searchString.length; i++) {
      newArray = newArray + string[i];
      if (string[i] === searchString[i] && i === searchString.length - 1) {
        return true;
      }
    }
  
    return false;
  }
  
  // // CASE 1
  var s = "hola mundo";
  
  var result = startsWith(s, "hol");
  
  console.log(result);
  // // true
  
  // // CASE 2
  
  var s = "hola mundo";
  
  var result = startsWith(s, "holo");
  
  console.log(result);
  // // false
  
  // function startsWith(string, searchString) {
  //   // TODO implement m
  //   var newString = "";
  //   for (var i = 0; i < searchString.length; i++) {
  //     newString = newString + string[i];
  //   }
  //   if (newString === searchString) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }