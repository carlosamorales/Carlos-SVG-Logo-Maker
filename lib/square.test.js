// lib/square.test.js

const { Square } = require('./shapes');

test('Square render method should return SVG string with correct color', () => {
  // Create a Square instance
  const square = new Square();
  
  // Set color to green
  square.setColor('green');

  // Call the render method
  const svgString = square.render();

  // Define expected SVG string
  const expectedSVG = '<rect x="30" y="30" width="240" height="140" fill="green" />';

  // Assert that the returned SVG string matches the expected SVG markup
  expect(svgString).toEqual(expectedSVG);
});
