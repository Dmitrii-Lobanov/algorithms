const Stack = function() {
  this.count = 0;
  this.storage = {};
  
  this.size = function() {
    return this.count;
  }
  
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  };
  
  this.pop = function() {
    if(!this.count) {
      return undefined;
    }
    this.count--;
    const popped = this.storage[this.count];
    delete this.storage[this.count];
    return popped;
  }
  
  this.pip = function() {
    return this.storage;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.size();
stack.pip();
