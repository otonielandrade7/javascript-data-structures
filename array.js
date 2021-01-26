//native
/* const array = ["Otoniel", "Gustavo", "Roberto", "Mario"];
array.push("Vladimir");
console.log(array); */

//created
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  splice() {
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }
  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  unshift(item) {
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[0] = item;
    this.length++;
    return this.data;
  }
}

const myArray = new MyArray();

myArray.push("Melsar");
myArray.push("Otoniel");
myArray.push("Andrade");
myArray.push("Castillo");

myArray.data; //shows all data
//{0: "Melsar", 1: "Otoniel", 2: "Andrade", 3: "Castillo"}

myArray.pop(); //removes the last item from the array
//{0: "Melsar", 1: "Otoniel", 2: "Andrade"}

myArray.delete(0); //deletes an item with a specific index
//{0: "Otoniel", 1: "Andrade"}
