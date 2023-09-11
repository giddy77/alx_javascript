const Rectangle = require("./0-rectangle");

class Square extends Rectangle {
    constructor(size) {
      super(size, size); // Call the constructor of the parent class (Rectangle)
    }
  }

module.exports = Square;