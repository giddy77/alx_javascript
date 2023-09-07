#!/usr/bin/node
class Rectangle {
    /**this is the rectangle class */
    constructor(w, h) {
        if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
          // If w or h is less than or equal to zero, not an integer, or negative, create an empty object
          return this.Rectangle;
        } else {
          this.width = w;
          this.height = h;
        }
      }

     print(width, height) {
        console.log("Width:", width);
        console.log("Height:", height);
      }
      
}

module.exports = Rectangle;
