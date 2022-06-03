
//Name the class Shape
//Provide a constructor that expects an array of sides, with a default value of an empty array []
//Create a class property sides that contains the constructor sides array using the this object
//Implement a class method perimeter that returns the value of the lengths of all sides.
//You may want to create this method initially using whatever version of a function you prefer, and once complete refactor the function using the remaining requirements
//This method must use an implicit arrow/lambda function
//You must use the Array reduce() method to calculate the perimeter value
//To make this method a single line of code, you will also need to use the ternary operator ( ? : ) to make sure the array has at least one side

const { isDataView } = require("util/types");

class Shape {
    constructor(sides = []) {
        this.sides = sides
    }
    perimeter() {
        const initialValue = 0;
        return this.sides.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
    }
}

//console.log(new Shape([5, 10]).perimeter());  // 15
//console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
//console.log(new Shape().perimeter()); // 0

//Name the class Rectangle
//Provide a constructor that expects two parameters length and 
//width with default values of 0
//Call the parent class Shape constructor using the super() method,
//and an array that consists of length, width, length, width, as a rectangle has four sides
//Create class properties length and width from 
//the constructor parameters using the this object
//Implement a method area that returns the rectangle area, 
//remembering that the area of a rectangle is length multiplied by width

class Rectangle extends Shape {
    constructor(length = 0, width = 0) {
        super([length, width, length, width]);
        this.length = length;
        this.width = width;
    }
    area() {
        return this.length * this.width
    }
}

//console.log(new Rectangle(4, 4).perimeter());  // 16
//console.log(new Rectangle(4, 4).area());  // 16
//console.log(new Rectangle(5, 5).perimeter()); // 20
//console.log(new Rectangle(5, 5).area()); // 25
//console.log(new Rectangle().perimeter()); // 0
//console.log(new Rectangle().area()); // 0

class Triangle extends Shape {
    constructor(sideA = [], sideB = [], sideC = []) {
        super([sideA, sideB, sideC]);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    area() {
        let s = (this.sideA + this.sideB + this.sideC) * (1/2)
        return Math.sqrt(s * (s-this.sideA) * (s-this.sideB) * (s-this.sideC))
    }
}

//console.log(new Triangle(3, 4, 5).perimeter());  // 12
//console.log(new Triangle(3, 4, 5).area());  // 6
//console.log(new Triangle().perimeter()); // 0
//console.log(new Triangle().area()); // 0

//for..of to iterate through the array
//variable initialization to null as a variable to hold the object created using new
//switch() to branch based on number of sides (2, 3 and default for all other values)
//spread/scatter ellipsis to pass the side array as individual values
//template literal for the output
//Array toString() method to produce a string of values from an array separated by commas

// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];

for (const element of data) {
  //console.log(element);
  newVal = element.length;
  //console.log(newVal);
  switch(newVal) {
    case 2: 
        console.log(`${element[0] == element[1]? "Square": "Rectangle"} with sides ${element.toString()} has a perimeter of ${new Rectangle(element[0], element[1]).perimeter().toString()} and an area of ${new Rectangle(element[0], element[1]).area().toString()}`);
        break;
    case 3:
        console.log(`Triangle with sides ${element.toString()} has a perimeter of ${new Triangle(element[0], element[1], element[2]).perimeter().toString()} and an area of ${new Triangle(element[0], element[1], element[2]).area().toString()}`);
        break;
    case 1:
        console.log('Shape with 1 side unsupported');
        break;
    default:
        console.log('Shape with 0 sides unsupported');
}
}

