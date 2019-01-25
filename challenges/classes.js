// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(properties) {
//    this.length = properties.length;
//    this.width = properties.width;
//    this.height = properties.height;
//  }

// CuboidMaker.prototype.volume = function () {
//    return this.length * this.width * this.height;
//  }
  
// CuboidMaker.prototype.surfaceArea = function() {
//    return 2*((this.length * this.width) + (this.length * this.height) +(this.width * this.height));
// }

class CuboidMaker1 {
    constructor(properties) {
        this.length = properties.length;
        this.width = properties.width;
        this.height = properties.height
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2*((this.length * this.width) + (this.length * this.height) +(this.width * this.height));
    }
};


// let cuboid = new CuboidMaker({
//    length: 4, 
//    width: 5, 
//    height: 5
//  })


let cuboid1 = new CuboidMaker1({
    length: 4, 
    width: 5, 
    height: 5
  }) 

// Added 1 to class and object because I was getting an error b/c the documents are linked and the variable names were the same.

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid1.volume()); // 100
 console.log(cuboid1.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.