class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(100, key.length); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  
  set(key, value) {
    const index = this._hash(key);
    
    if(!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    
    return index;
  }
  
  get(key) {
    const index = this._hash(key);
    if(this.keyMap[index]) {
      for(let i = 0; i < this.keyMap[index].length; i++) {
        if(this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  
  keys() {
    const keys = [];
    for(let i = 0; i < this.keyMap.length; i++) {
      if(this.keyMap[i]) {
        for(let j = 0; j< this.keyMap[i].length; j++) {
          if(!keys.includes(this.keyMap[i][j][0])) {
            keys.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keys;
  }
  
  values() {
    const values = [];
    for(let i = 0; i < this.keyMap.length; i++) {
      if(this.keyMap[i]) {
        for(let j = 0; j < this.keyMap[i].length; j++) {
          if(!values.includes(this.keyMap[i][j][1])) {
            values.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return values;
  }
}

const ht = new HashTable();
ht.set('car', 'bmw');
ht.set('name','John');
ht.set('name', 'ohnJ')
ht.set('name', 'Nina');


ht.keyMap

ht.get('name')
