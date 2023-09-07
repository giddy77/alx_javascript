const Rectangle = require("./0-rectangle");

class Square extends Rectangle{

    constructor(size){
       super(size, size)
    }

    print() {
        console.log(`Square\nWidth: ${this.width}\nHeight: ${this.height}`);
      }
}

module.exports = Square;