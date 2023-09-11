class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    getArea() {
      return this.width * this.height;
    }
  
    getPerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  class Square extends Rectangle {
    constructor(size) {
      super(size, size); // Call the constructor of the parent class (Rectangle)
    }
  
    toString() {
      return `Square: width=${this.width}, height=${this.height}`;
    }
  }