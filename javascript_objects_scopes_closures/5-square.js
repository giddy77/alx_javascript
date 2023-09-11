const Rectangle = require("./4-rectangle");// Replace with the actual path to your Rectangle class file

class Square extends Rectangle {
  constructor(size) {
    super(size, size); // Call the constructor of the parent class (Rectangle)
  }

  print() {
    for (let i = 0; i < this.height; i++) {
      let row = '';
      for (let j = 0; j < this.width; j++) {
        row += 'X';
      }
      console.log(row);
    }
  }

  double() {
    // Double the width and height of the square
    this.width *= 2;
    this.height *= 2;
  }
}