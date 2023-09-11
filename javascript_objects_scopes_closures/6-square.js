// Import the Square class from 5-square.js (assuming the correct path)
const ParentSquare = require('./5-square');

// Define the Square class that inherits from ParentSquare
class Square extends Square {
  constructor(size) {
    super(size); // Call the constructor of the parent class (ParentSquare) with size
  }

  charPrint(c) {
    if (c === undefined) {
      c = 'X'; // Default to 'X' if c is undefined
    }

    for (let i = 0; i < this.size; i++) {
      let row = '';
      for (let j = 0; j < this.size; j++) {
        row += c;
      }
      console.log(row);
    }
  }
}

// Export the Square class
module.exports = Square;
