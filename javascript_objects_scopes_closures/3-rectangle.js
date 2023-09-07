#!/usr/bin/node
class Rectangle {
    /**this is the rectangle class */
    constructor(w, h) {
        if (w>0 && h>0){
            this.width = w;
            this.height = h;
        }
      }
      


      print(){
        for (i=0; i<count(this.width); i++){
            console.log("X")
        }

        for (i=0; i<count(this.height); i++){
            console.log("X")
        }
      }
      
}

module.exports = Rectangle;
