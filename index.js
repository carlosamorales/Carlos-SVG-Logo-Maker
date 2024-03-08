// Import necessary modules
const { promptUserInput } = require('./lib/inquirer');
const { writeSVGToFile } = require('./lib/fileWriter');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Main function to run the application
async function run() {
  try {
    // Prompt the user for input using Inquirer
    const userInput = await promptUserInput();

    // Create the corresponding shape based on user input
    let shape;
    switch (userInput.shape) {
      case 'circle':
        shape = new Circle();
        break;
      case 'triangle':
        shape = new Triangle();
        break;
      case 'square':
        shape = new Square();
        break;
      default:
        throw new Error('Invalid shape');
    }

    // Set shape color
    shape.setColor(userInput.shapeColor);

    // Generate the SVG string for the shape
    const svgString = shape.render();

    // Save the SVG string to a file named 'logo.svg'
    await writeSVGToFile(svgString);

    // Print success message
    console.log('Generated logo.svg');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Run the application
run();
