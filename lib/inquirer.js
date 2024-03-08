// lib/inquirer.js

const inquirer = require('inquirer');

function promptUserInput() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
      validate: function(value) {
        return value.length > 0 && value.length <= 3 ? true : 'Please enter up to three characters.';
      }
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (e.g., "red" or "#FF0000"):'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (e.g., "blue" or "#0000FF"):'
    }
  ]);
}

module.exports = { promptUserInput };
