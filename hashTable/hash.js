class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
  delete(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          delete this.data[address][i];
          if (!this.data[address][0]) {
            delete this.data[address];
          }
          return this.data;
        }
      }
    }
    return undefined;
  }

  getAllKeys() {
    const keys = [];
    this.data.forEach((element) => {
      element.forEach((nestedElement) => {
        keys.push(nestedElement[0]);
      });
    });
    return keys;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("Otoniel", 1999);
myHashTable.set("Roberto", 1998);
myHashTable.set("Gustavo", 1997);
