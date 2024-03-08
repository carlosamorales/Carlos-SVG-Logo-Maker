// lib/triangle.test.js

const { Triangle } = require('./shapes');

test('Triangle render method should return SVG string with correct color', () => {
  // Create a Triangle instance
  const triangle = new Triangle();
  
  // Set color to blue
  triangle.setColor('blue');

  // Call the render method
  const svgString = triangle.render();

  // Define expected SVG string
  const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';

  // Assert that the returned SVG string matches the expected SVG markup
  expect(svgString).toEqual(expectedSVG);
});
