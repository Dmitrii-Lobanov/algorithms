class MySet {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = [];
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary.indexOf(element) !== -1;
  }

  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }

  add(value) {
    if(!this.has(value)) {
      this.dictionary.push(value);
      this.length++;
      return true;
    }
    return false;
  }

  remove(value) {
    if(this.has(value)) {
      const index = this.dictionary.indexOf(value);
      this.dictionary.splice(index, 1);
      this.length--;
      return true;
    }
    return false;
  }

  size() {
    return this.length;
  }
  
  union(otherSet) {
    const unionSet = new MySet();
    const firstSet = this.values();
    const secondSet = otherSet.values();
    
    firstSet.forEach(e => unionSet.add(e));
    secondSet.forEach(e => unionSet.add(e));
    
    return unionSet;
  }
  
  intersection(otherSet) {
    const intersectionSet = new MySet();
    const firstSet = this.values();
    firstSet.forEach(e => {
      if(otherSet.has(e)) {
        intersectionSet.add(e);
      }
    })
    return intersectionSet;
  }
  
  difference(otherSet) {
    const differenceSet = new MySet();
    const firstSet = this.values();
    firstSet.forEach(e => {
      if(!otherSet.has(e)) {
        differenceSet.add(e);
      }
    })
    return differenceSet;
  }
  
  subset(otherSet) {
    const firstSet = this.values();
    return firstSet.every(e => {
      return otherSet.has(e);
    })
  }
}

const set = new MySet();

set.add(1);
set.add(2);
set.add(2);
set.size();

const newSet = new MySet();
newSet.add(1);
newSet.add(3);

set.union(newSet);
set.intersection(newSet);
set.difference(newSet);
set.subset(newSet)
