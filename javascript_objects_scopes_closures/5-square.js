const Rectangle = require("./4-rectangle");// Replace with the actual path to your Rectangle class file

class Square extends Rectangle {
  constructor(w,h,size) {
    super(size, size);
    this.size = size; // Call the constructor of the parent class (Rectangle)
  }
}
