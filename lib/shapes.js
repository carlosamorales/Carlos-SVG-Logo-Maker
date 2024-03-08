// lib/shapes.js

class Shape {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      // Implement render method in subclasses
    }
  }
  
  class Triangle extends Shape {
    render() {
      // Implement render method for Triangle
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      // Implement render method for Circle
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      // Implement render method for Square
      return `<rect x="30" y="30" width="240" height="140" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Triangle, Circle, Square };
  // lib/shapes.test.js

const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle render method', () => {
  test('should return SVG string with correct color', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    const svgString = triangle.render();
    expect(svgString).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

describe('Circle render method', () => {
  test('should return SVG string with correct color', () => {
    const circle = new Circle();
    circle.setColor('red');
    const svgString = circle.render();
    expect(svgString).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
  });
});

describe('Square render method', () => {
  test('should return SVG string with correct color', () => {
    const square = new Square();
    square.setColor('green');
    const svgString = square.render();
    expect(svgString).toEqual('<rect x="30" y="30" width="240" height="140" fill="green" />');
  });
});
