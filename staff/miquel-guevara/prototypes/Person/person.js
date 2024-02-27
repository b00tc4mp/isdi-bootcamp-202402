function Person(name, lastname, height, weight, age, complexion, skinColor, eyesColor, favoriteFood, ) {
    
    this.name = name;
    this.lastname = lastname;
    this.height = height;
    this.weight = weight;
    this.age = age;
    this.complexion = complexion;
    this.skinColor = skinColor;
    this.eyesColor = eyesColor;
    this.favoriteFood = favoriteFood;
    
    this.biologic = '';
    this.stopped = 0;
    this.speed = 0;
    this.acceleration = 0;
    this.direction = '';
    this.jump = 0;
    this.maxspeed = 10;
    this.maxJump = 10
    this.maxlife = 110
  }

Person.prototype.jumpUp = function(distance){
  if(distance > 0 && distance <= this.maxJump){
    this.jump = distance;
    this.direction = 'up';
  } else {throw new RangeError("distance must be between 1 and 10")}
} 

Person.prototype.crouch = function(distance){
  if(distance < 0 && distance >= -10){
    this.jump = distance;
    this.direction = 'down';
  } else {throw new RangeError("distance must be between -1 and -10")}
}

Person.prototype.foodPreference = function(omnivore){
    this.favoriteFood = 'omnivore';
}

Person.prototype.life = function(age){
  if(this.maxlife <= age){
    this.biologic = 'alive';
} else if(age > this.maxlife){
    this.biologic = 'dead';}
} 



  module.exports = Person;