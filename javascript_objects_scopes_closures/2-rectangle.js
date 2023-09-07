#!/usr/bin/node
class Rectangle {
    /**this is the rectangle class */
    constructor(w, h) {
        if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
            this.width = w;
            this.height = h;
        }
    }
}

module.exports = Rectangle;
