//ejecuta la función indicada una vez por cada elemento del array.

delete Array.prototype.forEach;

function forEach(array, callback) {
  if (callback instanceof Function === false)
    throw new TypeError(callback + " is not a function");

  for (var i = 0; i < array.length; i++) {
    var element = array[i];

    callback(element, i, array);
  }
}
{
  console.log("CASE 1");

  var nums = [10, 20, 30, 40, 50];
  var other = [];
  var expectedResult = [10, 20, 30, 40, 50];

  var other1 = forEach(nums, function (num) {
    other[other.length] = num;
  });
  arrAssertTesting(nums, other, expectedResult);
}

{
  console.log("CASE 2");

  var nums = [10, 20, 30, 40, 50];
  var sum = 0;

  forEach(nums, function (num) {
    sum += num;
  });

  console.assert(sum === 150, 150);

  var numsCopy = [10, 20, 30, 40, 50];

  arrAssertTesting(nums, numsCopy, numsCopy);
}
{
  console.log("CASE 3");
  var nums = [10, 20, 30, 40, 50];
  var results = [];
  var expectedResult = [10, 21, 32, 43, 54];

  var sumForEach = forEach(nums, function (num, index) {
    results[results.length] = num + index;
  });

  for (var i = 0; i < results.length - 1; i++) {
    console.assert((expectedResult[i] = results[i]));
  }
  arrAssertTesting(expectedResult, results, expectedResult);

  var numsCopy = [10, 20, 30, 40, 50];
  arrAssertTesting(nums, numsCopy, numsCopy);
}

{
  console.log("CASE 4");

  var nums = [10, 20, 30, 40, 50];

  var results = [];
  var expectedResult = [15, 26, 37, 48, 59];

  forEach(nums, function (num, index, array) {
    results[results.length] = num + index + array.length;
  });

  arrAssertTesting(results, expectedResult, expectedResult);

  var numsCopy = [10, 20, 30, 40, 50];
  arrAssertTesting(nums, numsCopy, numsCopy);
}
{
  console.log("CASE 5");

  var nums = [10, 20, 30, 40, 50];

  try {
    forEach(nums);
  } catch (error) {
    console.assert(error.name === "TypeError", "name");
    console.assert(error.message === "undefined is not a function", "message");
  }
}
console.log("CASE 6");

var nums = [10, 20, 30, 40, 50];

try {
  forEach(nums, {});
} catch (error) {
  console.assert(error.name === "TypeError");
  console.assert(
    error.message === "[object Object] is not a function",
    "message"
  );
}
{
  console.log("CASE 7");

  var nums = [10, 20, 30, 40, 50];

  try {
    forEach(nums, 123);
  } catch (error) {
    console.assert(error.name === "TypeError");

    console.assert(error.message === "123 is not a function", "message");
  }
}
console.log("CASE 8");

var nums = [10, 20, 30, 40, 50];

try {
  forEach(nums, true);
} catch (error) {
  console.assert(error.name === "TypeError");
  console.assert(error.message === "callback is not a function", "message");
}
