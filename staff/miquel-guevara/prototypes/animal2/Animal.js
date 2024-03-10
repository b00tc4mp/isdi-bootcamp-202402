function Animal(country, vertrebate, age, legs, weight) {
  
    if (typeof country !== 'string') throw new TypeError('country is not a string')
    if (typeof vertrebate !== 'string') throw new TypeError('vertrebate is not a string')
    if (typeof age !== 'number') throw new TypeError('age is not a number')
    if (typeof legs !== 'number') throw new TypeError('legs is not a number')
    if (typeof weight !== 'number') throw new TypeError('weight is not a number')
  
  this.country = country;
  this.vertrebate = vertrebate;
  this.age = age;
  this.legs = legs;
  this.weight = weight;
  this.eat = "";
  this.sleeping = false;
  this.legsSpeed = Animal.NOT_WALK;
  this.energy = 100;
}

Animal.NOT_WALK = 0;
Animal.WALK_VERY_SLOW = 1;
Animal.WALK_SLOW = 2;
Animal.WALK_NORMAL = 4;
Animal.WALK_FAST = 5;
Animal.RUN = 6;

Animal.prototype.sleep = function () {
  this.sleeping = true;
};

Animal.prototype.awake = function () {
  this.sleeping = false;
};

Animal.prototype.eating = function (food) {
  if (this.sleeping) throw new Error("try to eat on sleeping");
  if (typeof food !== "string") {
    throw new Error("Pass me a 'String' so I can eat")
  } else {
    this.eat = food;
  }
};

Animal.prototype.moveLegs = function (speed) {
  this.legsSpeed = speed === undefined ? 4 : speed;
};

Animal.prototype.moveLegs = function (speed) {
  this.legsSpeed = speed === undefined ? 4 : speed;
};

Animal.prototype.swiming = function (){
  //this.energy -= 20
  if (this.energy <= 20){
    throw new Error("Throw for the ground")
  }
}

module.exports = Animal;
