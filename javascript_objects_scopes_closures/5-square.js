#!/usr/bin/node
const Rectangle = require("./4-rectangle");// Replace with the actual path to your Rectangle class file

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
    this.size = size; // Call the constructor of the parent class (Rectangle)
  }
}

let mySquare = new Square()
mySquare.width
mySquare.height

module.exports = Square;
