delete Array.prototype.at;

function push(array, ...elements) {
  // TODO implement me
  if (elements.length > 0) array[array.length] = elements[0];

  return array.length;
  //   if (elements.length > 0)
  //     for (let i = 0; i < elements.length; i++) {
  //       array[array.length] = elements[0];
  //     }
  //   return array.length;
}

console.log("CASE1");

{
  const nums = [100, 200, 300, 400, 500];

  const length = (nums, 600);

  console.log(length);
  // 6
  console.log(nums);
  // [100, 200, 300, 400, 500, 600]
}

console.log("CASE2");

var animals = ["pigs", "goats", "sheep"];

var length = push(animals, "cows");

console.log(length);
// 4
console.log(animals);
// ['pigs', 'goats', 'sheep', 'cows']

console.log("CASE3");

var sports = ["soccer", "baseball"];

var length = push(sports);

console.log(length);
// 2
console.log(sports);
// ['soccer', 'baseball']

console.log("CASE4");

var sports = ["soccer", "baseball"];

var length = push(sports, undefined);

console.log(length);
// 3
console.log(sports);
// ['soccer', 'baseball', 'undefined']

console.log("CASE5");

var a = [10, 20, 30];

var length = a.push(40, 50, 60);

var length = push(nums, 40, 50, 60);

console.log(length);
// 6
console.log(nums);
// ['10', '20', '30', '40', '50, '60']
