var assert = require("./assert");

var Animal = require("./Animal");

console.log("TEST Animal");

console.log("CASE constructor");

var polarBear = new Animal("Artico", "mammal", 12, 4, 450);

assert.instanceOf(polarBear, Animal);
assert.equalsValue(polarBear.constructor, Animal);
assert.equalsValue(polarBear.country, "Artico");
assert.equalsValue(polarBear.vertrebate, "mammal");
assert.equalsValue(polarBear.age, 12);
assert.equalsValue(polarBear.legs, 4);
assert.equalsValue(polarBear.weight, 450);

console.log("CASE sleep");

var polarBear = new Animal("Artico", "mammal", 12, 4, 450);

polarBear.sleep();

assert.equalsValue(polarBear.sleeping, true);

console.log("CASE awake");

var polarBear = new Animal("Artico", "mammal", 12, 4, 450);

polarBear.sleeping = true;

polarBear.awake();

assert.equalsValue(polarBear.sleeping, false);

console.log("CASE eat");

var polarBear = new Animal("Artico", "mammal", 12, 4, 450);

polarBear.eating("seals");

assert.equalsValue(polarBear.eat, "seals");

console.log("CASE not walk");

var polarBear = new Animal("Artico", "mammal", 12, 4, 450);

polarBear.moveLegs(Animal.NOT_WALK);

assert.equalsValue(polarBear.legsSpeed, Animal.NOT_WALK);

console.log("CASE walk");

var polarBear = new Animal("Artico", "mammal", 12, 4, 450);

polarBear.moveLegs();

assert.equalsValue(polarBear.legsSpeed, Animal.WALK_NORMAL);

console.log("CASE walk fast");

var polarBear = new Animal("Artico", "mammal", 12, 4, 450);

polarBear.moveLegs(Animal.WALK_FAST);

assert.equalsValue(polarBear.legsSpeed, Animal.WALK_FAST);

console.log("CASE walk slow");

var polarBear = new Animal("Artico", "mammal", 12, 4, 450);

polarBear.moveLegs(Animal.WALK_SLOW);

assert.equalsValue(polarBear.legsSpeed, Animal.WALK_SLOW);

console.log("CASE walk normal");

var polarBear = new Animal("Artico", "mammal", 12, 4, 450);

polarBear.moveLegs(Animal.WALK_NORMAL);

assert.equalsValue(polarBear.legsSpeed, Animal.WALK_NORMAL);

console.log("CASE walk very slow");

var polarBear = new Animal("Artico", "mammal", 12, 4, 450);

polarBear.moveLegs(Animal.WALK_VERY_SLOW);

assert.equalsValue(polarBear.legsSpeed, Animal.WALK_VERY_SLOW);

console.log("CASE swim");

var polarBear = new Animal("Artico", "mammal", 12, 4, 450);

polarBear.swiming();

assert.equalsValue(polarBear.energy, 100)

console.log("CASE Unhappy swim");

var polarBear = new Animal("Artico", "mammal", 12, 4, 450);

polarBear.swiming();

assert.equalsValue(polarBear.energy, 100);

polarBear.energy = 20;

var errorThrown;

try {
  polarBear.swiming(15);
} catch (error) {
  errorThrown = error;
}

assert.error(errorThrown, "Error", "Throw for the ground");

console.log("CASE constructor fails on non-string name");

var errorThrown;

try {
  new Animal(undefined, "mammal", 12, 4, 450);
} catch (error) {
  errorThrown = error;
}

assert.error(errorThrown, "TypeError", "country is not a string");

console.log("CASE constructor fails on vertebrates");

var errorThrown;

try {
  new Animal("Artico", undefined, 12, 4, 450);
} catch (error) {
  errorThrown = error;
}

assert.error(errorThrown, "TypeError", "vertrebate is not a string");

console.log("CASE constructor fails on age");

var errorThrown;

try {
  new Animal("Artico", "mammal", undefined, 4, 450);
} catch (error) {
  errorThrown = error;
}

assert.error(errorThrown, "TypeError", "age is not a number");

console.log("CASE constructor fails on legs");

var errorThrown;

try {
  new Animal("Artico", "mammal", 12, undefined, 450);
} catch (error) {
  errorThrown = error;
}

assert.error(errorThrown, "TypeError", "legs is not a number");

console.log("CASE constructor fails on weight");

var errorThrown;

try {
  new Animal("Artico", "mammal", 12, 4, undefined);
} catch (error) {
  errorThrown = error;
}

assert.error(errorThrown, "TypeError", "weight is not a number");
