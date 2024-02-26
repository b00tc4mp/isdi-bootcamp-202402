function Person(name, lastname, height, weight, age, complexion, skinColor, eyesColor, favoriteFood, status) {
    
    this.name = name;
    this.lastname = lastname;
    this.height = height;
    this.weight = weight;
    this.age = age;
    this.complexion = complexion;
    this.skinColor = skinColor;
    this.eyesColor = eyesColor;
    this.favoriteFood = favoriteFood;
    this.status = status;
  
    this.stopped = 0;
    this.speed = 0;
    this.jump = 0;
    this.direction = "";
    this.steering = 0;
  }

  module.exports = Person;