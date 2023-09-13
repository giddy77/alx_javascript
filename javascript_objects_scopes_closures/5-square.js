#!/usr/bin/node
const Rectangle = require("./4-rectangle");// Replace with the actual path to your Rectangle class file

class Square extends Rectangle {
  constructor(size) {
    super(size);
    this.size = size; // Call the constructor of the parent class (Rectangle)
  }
}

let mySquare = new Square(4)
mySquare.width
mySquare.height

module.exports = Square;
