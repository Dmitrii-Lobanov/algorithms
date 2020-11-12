function Queue() {
  collection = [];
  
  this.enqueue = function(element) {
    collection.push(element);
  }
  
  this.dequeue = function() {
    return collection.shift();
  }
  
  this.print = function() {
    console.log(collection);
  }
}

const queue = new Queue();
queue.enqueue('1');
queue.enqueue('2');
queue.enqueue('3');
queue.dequeue();

queue.print()
