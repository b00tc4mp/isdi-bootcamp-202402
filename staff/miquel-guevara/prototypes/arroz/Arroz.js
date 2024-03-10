function Arroz() {
  if (arguments.length !== 1) {
    this.length = arguments.length;

    for (var i = 0; i < arguments.length; i++) {
      var argument = arguments[i];

      this[i] = argument;
    }
  } else {
    var argument = arguments[0];

    if (typeof argument === "number") {
      this.length = argument;

      return;
    }

    this[0] = argument;
    this.length = 1;
  }
}

Arroz.prototype.push = function () {
  for (var i = 0; i < arguments.length; i++) {
    var argument = arguments[i];

    this[this.length] = argument;
    this.length++;
  }

  return this.length;
};

Arroz.prototype.pop = function () {
  var lastIndex = this.length - 1;

  var last = this[lastIndex];

  delete this[lastIndex];

  this.length--;

  return last;
};

Arroz.prototype.toString = function () {
  var string = "Arroz [";

  for (var i = 0; i < this.length; i++) {
    var element = this[i];

    string += element;

    if (i < this.length - 1) string += ", ";
  }

  string += "]";

  return string;
};

Arroz.prototype.at = function (index) {
  if (index > -1) {
    var indexfound = this[index];

    return indexfound;
  } else if (index < 0) {
    var indexfound = this.length + index;

    return this[indexfound];
  } else if (index === undefined) {
    var searchIndex = this[0];
    return searchIndex;
  }
};

Arroz.prototype.concat = function () {
  var resultArroz = new Arroz();

  for (var i = 0; i < this.length; i++) {
    resultArroz[resultArroz.length] = this[i];
    resultArroz.length++;
  }

  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] instanceof Arroz) {
      var elem = arguments[i];

      for (var j = 0; j < elem.length; j++) {
        resultArroz[resultArroz.length] = elem[j];
        resultArroz.length++;
      }
    } else {
      resultArroz[resultArroz.length] = arguments[i];
      resultArroz.length++;
    }
  }

  return resultArroz;
};

Arroz.prototype.forEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    var elem = this[i];

    callback(elem, i, this);
  }
};

Arroz.prototype.includes = function (callback) {
  for (var i = 0; i < this.length; i++) {
    var element = this[i];

    if (element !== undefined) {
      if (callback(element) === true) return true;
    }
  }
  return false;
};

Arroz.prototype.map = function (callback) {
  var value = new Arroz();

  for (var i = 0; i < this.length; i++) {
    value[value.length] = callback(this[i]);
    value.length++;
  }
  return value;
};

Arroz.prototype.find = function (callback) {
  for (var i = 0; i < this.length; i++) {
    var elem = this[i];

    var matches = callback(elem, i, this);

    if (matches) return elem;
  }
};

Arroz.from = function (arroz) {
  var instance = new Arroz();

  for (var i = 0; i < arroz.length; i++) {
    var elem = arroz[i];

    instance[instance.length++] = elem;
  }

  return instance;
};

Arroz.prototype.indexOf = function (searchElement) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === searchElement) {
      return i;
    }
  }
  return -1;
};

Arroz.prototype.lastIndexOf = function (searchElement, index) {
  if (index >= this.length) {
    return -1;
  } else if ((index < 0 && this.length + index < 0) || index === undefined) {
    for (var i = this.length - 1; i >= 0; i--) {
      if (searchElement === this[i]) {
        return i;
      }
    }
  } else if (index < 0 && this.length + index > 0) {
    for (var i = this.length + index; i >= 0; i--) {
      if (searchElement === this[i]) {
        return i;
      }
    }
  } else {
    for (var i = index; i >= 0; i--) {
      if (searchElement === this[i]) {
        return i;
      }
    }
  }
  return -1;
};

Arroz.prototype.every = function (callback) {
  for (var i = 0; i < this.length; i++) {
    var element = this[i];
    if (callback(element) === false) {
      //if (callback(this[i]) === false) {
      return false;
    }
  }
  return true;
};

Arroz.prototype.some = function (callback) {
  for (var i = 0; i < this.length; i++) {
    var element = this[i];
    if (callback(element) === true) {
      //if (callback(this[i]) === true) {
      return true;
    }
  }
  return false;
};

Arroz.prototype.unshift = function () {
  var length = arguments.length + this.length;
  for (var i = length - 1; i > -1; i--) {
    this[i] = this[i - arguments.length];
  }
  for (var i = 0; i < arguments.length; i++) {
    this[i] = arguments[i];
  }
  return (this.length = length);
};

Arroz.prototype.with = function (index, value) {
  var newArroz = new Arroz();

  for (var i = 0; i < this.length; i++) {
    var elem = this[i];
    if (i === index) {
      newArroz[newArroz.length] = value;
      newArroz.length++;
    } else {
      newArroz[newArroz.length] = elem;
      newArroz.length++;
    }
  }
  return newArroz;
};

module.exports = Arroz;
