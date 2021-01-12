var Map = function() {
  this.collection = {};
  this.length = 0;

  this.size = function() {
    return this.length;
  };

  this.add = function(key, value) {
    this.collection[key] = value;
    this.length++;
  };

  this.remove = function(key) {
    if(key in this.collection) {
      delete this.collection[key];
      this.length--;
    }
  };

  this.get = function(key) {
    if(key in this.collection) {
      return this.collection[key];
    }
  };

  this.has = function(key) {
    return !!(key in this.collection);
  };

  this.values = function() {
    let result = [];
    for(let key in this.collection) {
      result.push(this.collection[key]);
    }
    return result.length > 0 ? result: null;
  };

  this.clear = function() {
    this.collection = {};
    this.length = 0;
  }
};
