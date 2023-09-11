const Rectangle = require("./4-rectangle");// Replace with the actual path to your Rectangle class file

class Square extends Rectangle {
  constructor(size) {
    super(w, h);
    this.size = size; // Call the constructor of the parent class (Rectangle)
  }
}

modules.exports = Square;