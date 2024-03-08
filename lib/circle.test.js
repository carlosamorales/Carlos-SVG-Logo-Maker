// lib/circle.test.js

const { Circle } = require('./shapes');

test('Circle render method should return SVG string with correct color', () => {
  // Create a Circle instance
  const circle = new Circle();
  
  // Set color to red
  circle.setColor('red');

  // Call the render method
  const svgString = circle.render();

  // Define expected SVG string
  const expectedSVG = '<circle cx="150" cy="100" r="80" fill="red" />';

  // Assert that the returned SVG string matches the expected SVG markup
  expect(svgString).toEqual(expectedSVG);
});
