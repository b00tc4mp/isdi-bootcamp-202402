var assert = require("./assert");

var Cat = require("./Cat");

console.log("TEST Cat");

console.log("CASE constructor");

var cat = new Cat("Misha", 12, "CAT", 7);

assert.equalsValue(cat.name, "Misha");
assert.equalsValue(cat.age, 12);
assert.equalsValue(cat.country, "CAT");
assert.equalsValue(cat.weight, 7);
assert.equalsValue(cat.sleeping, false);
assert.equalsValue(cat.eating, "");
assert.equalsValue(cat.legsSpeed, 0);

console.log("CASE sleep");

var cat = new Cat("Misha", 12, "CAT", 7);

cat.sleep();

assert.equalsValue(cat.sleeping, true);

console.log("CASE awake");

var cat = new Cat("Misha", 12, "CAT", 7);

cat.sleeping = true;

cat.awake();

assert.equalsValue(cat.sleeping, false);

console.log("CASE eat");

var cat = new Cat("Misha", 12, "CAT", 7);

cat.eat("fish");

assert.equalsValue(cat.eating, "fish");

console.log("CASE eat on sleeping (unhappy)");

var cat = new Cat("Misha", 12, "CAT", 7);

cat.sleeping = true;

var errorThrown;

try {
  cat.eat("dog food");
} catch (error) {
  errorThrown = error;
}

assert.error(errorThrown, "Error", "try to eat on sleeping");

console.log("CASE not walk");

var cat = new Cat("Misha", 12, "CAT", 7);

cat.moveLegs(Cat.NOT_WALK);

assert.equalsValue(cat.legsSpeed, Cat.NOT_WALK);

console.log("CASE walk");

var cat = new Cat("Misha", 12, "CAT", 7);

cat.moveLegs();

assert.equalsValue(cat.legsSpeed, Cat.WALK_NORMAL);

console.log("CASE walk fast");

var cat = new Cat("Misha", 12, "CAT", 7);

cat.moveLegs(Cat.WALK_FAST);

assert.equalsValue(cat.legsSpeed, Cat.WALK_FAST);

console.log("CASE walk slow");

var cat = new Cat("Misha", 12, "CAT", 7);

cat.moveLegs(Cat.WALK_SLOW);

assert.equalsValue(cat.legsSpeed, Cat.WALK_SLOW);

console.log("CASE walk normal");

var cat = new Cat("Misha", 12, "CAT", 7);

cat.moveLegs(Cat.WALK_NORMAL);

assert.equalsValue(cat.legsSpeed, Cat.WALK_NORMAL);

console.log("CASE walk very slow");

var cat = new Cat("Misha", 12, "CAT", 7);

cat.moveLegs(Cat.WALK_VERY_SLOW);

assert.equalsValue(cat.legsSpeed, Cat.WALK_VERY_SLOW);

console.log("CASE run");

var cat = new Cat("Misha", 12, "CAT", 7);

cat.moveLegs(Cat.RUN);

assert.equalsValue(cat.legsSpeed, Cat.RUN);
