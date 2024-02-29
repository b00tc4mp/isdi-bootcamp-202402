var assert = require("./assert");

var Animal = require("./Animal");

console.log("TEST Animal");

console.log("CASE constructor");

var polarBear = new Animal("polarBear", new Date(2010, 2, 3, 10, 30), "AR", 450);

assert.instanceOf(polarBear, Animal);
assert.equalsValue(polarBear.constructor, Animal);
assert.equalsValue(polarBear.name, "polarBear");
assert.instanceOf(polarBear.birthdate, Date);
assert.equalsValue(polarBear.birthdate.getFullYear(), 2010);
assert.equalsValue(polarBear.birthdate.getMonth(), 2);
assert.equalsValue(polarBear.birthdate.getDate(), 3);
assert.equalsValue(polarBear.birthdate.getHours(), 10);
assert.equalsValue(polarBear.birthdate.getMinutes(), 30);
assert.equalsValue(polarBear.country, "AR");
assert.equalsValue(polarBear.weight, 13);
assert.equalsValue(polarBear.sleeping, false);
assert.equalsValue(polarBear.eating, "");
assert.equalsValue(polarBear.legsSpeed, 0);

console.log("CASE sleep");

var polarBear = new Animal("polarBear", new Date(2010, 2, 3, 10, 30), "AR", 450);

polarBear.sleep();

assert.equalsValue(polarBear.sleeping, true);

console.log("CASE awake");

var polarBear = new Animal("polarBear", new Date(2010, 2, 3, 10, 30), "AR", 450);

polarBear.sleeping = true;

polarBear.awake();

assert.equalsValue(polarBear.sleeping, false);

console.log("CASE eat");

var polarBear = new Animal("polarBear", new Date(2010, 2, 3, 10, 30), "AR", 450);

polarBear.eat("seals");

assert.equalsValue(polarBear.eating, "seals");

console.log("CASE eat on sleeping (unhappy)");

var polarBear = new Animal("polarBear", new Date(2010, 2, 3, 10, 30), "AR", 450);

polarBear.sleeping = true;

var errorThrown;

try {
  polarBear.eat("dogfood");
} catch (error) {
  errorThrown = error;
}

assert.error(errorThrown, "Error", "try to eat on sleeping");

console.log("CASE not walk");

var polarBear = new Animal("polarBear", new Date(2010, 2, 3, 10, 30), "AR", 450);

polarBear.moveLegs(Animal.NOT_WALK);

assert.equalsValue(polarBear.legsSpeed, Animal.NOT_WALK);

console.log("CASE walk");

var polarBear = new Animal("polarBear", new Date(2010, 2, 3, 10, 30), "AR", 450);

polarBear.moveLegs();

assert.equalsValue(polarBear.legsSpeed, Animal.WALK_NORMAL);

console.log("CASE walk fast");

var polarBear = new Animal("polarBear", new Date(2010, 2, 3, 10, 30), "AR", 450);

polarBear.moveLegs(Animal.WALK_FAST);

assert.equalsValue(polarBear.legsSpeed, Animal.WALK_FAST);

console.log("CASE walk slow");

var polarBear = new Animal("polarBear", new Date(2010, 2, 3, 10, 30), "AR", 450);

polarBear.moveLegs(Animal.WALK_SLOW);

assert.equalsValue(polarBear.legsSpeed, Animal.WALK_SLOW);

console.log("CASE walk normal");

var polarBear = new Animal("polarBear", new Date(2010, 2, 3, 10, 30), "AR", 450);

polarBear.moveLegs(Animal.WALK_NORMAL);

assert.equalsValue(polarBear.legsSpeed, Animal.WALK_NORMAL);

console.log("CASE walk very slow");

var polarBear = new Animal("polarBear", new Date(2010, 2, 3, 10, 30), "AR", 450);

polarBear.moveLegs(Animal.WALK_VERY_SLOW);

assert.equalsValue(polarBear.legsSpeed, Animal.WALK_VERY_SLOW);

console.log("CASE run");

var polarBear = new Animal("polarBear", new Date(2010, 2, 3, 10, 30), "AR", 450);

polarBear.moveLegs(Animal.RUN);

assert.equalsValue(polarBear.legsSpeed, Animal.RUN);

console.log("CASE toString");

var polarBear = new Animal("polarBear", new Date(2010, 2, 3, 10, 30), "AR", 450);

assert.equalsValue(polarBear.toString(), "Animal (polarBear)");

console.log("CASE constructor fails on non-string name");

var errorThrown;

try {
  new Animal(undefined, new Date(2010, 2, 3, 10, 30), "AR", 450);
} catch (error) {
  errorThrown = error;
}

assert.error(errorThrown, "TypeError", "name is not a string");

console.log("CASE constructor fails on non-Date birthdate");

var errorThrown;

try {
  new Animal("polarBear", undefined, "AR", 450);
} catch (error) {
  errorThrown = error;
}

assert.error(errorThrown, "TypeError", "birthdate is not a Date");

console.log("CASE constructor fails on non-string country");

var errorThrown;

try {
  new Animal("polarBear", new Date(2010, 2, 3, 10, 30), undefined, 450);
} catch (error) {
  errorThrown = error;
}

assert.error(errorThrown, "TypeError", "country is not a string");

console.log("CASE constructor fails on non-number weight");

var errorThrown;

try {
  new Animal("polarBear", new Date(2010, 2, 3, 10, 30), "AR", undefined);
} catch (error) {
  errorThrown = error;
}

assert.error(errorThrown, "TypeError", "weight is not a number");
