#!/usr/bin/node
class Rectangle {
    /**this is the rectangle class */
    constructor(w, h) {
        if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
            // If w or h is less than or equal to zero, or not an integer, create an empty object
            this.width = undefined;
            this.height = undefined;
        } else {
            this.width = w;
            this.height = h;
        }
    }
}

module.exports = Rectangle;
