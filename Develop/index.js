// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown= require('./utils/generateMarkdown')
// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? (Required)',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Enter your title!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'What is your GitHub Username? (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Enter your GitHub username!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address? (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Enter your email address!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'what',
    message: 'What is your project ? (Required)',
    validate: whatInput => {
      if (whatInput) {
        return true;
      } else {
        console.log('Enter what your project is!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'why',
    message: 'Why did you create this project? (Required)',
    validate: whyInput => {
      if (whyInput) {
        return true;
      } else {
        console.log('Please enter why you created this project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'how',
    message: 'How will someone use this? (Required)',
    validate: howInput => {
      if (howInput) {
        return true;
      } else {
        console.log('Please enter what your project is!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide step-by-step installation instructions for your project. (Required)',
    validate: installInput => {
      if (installInput) {
        return true;
      } else {
        console.log('Please enter your installation instructions!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions and examples for use. (Required)',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please enter your use instructions!');
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license will you use for your project?',
    choices: ['mit', 'no license']
  },
  {
    type: 'confirm',
    name: 'confirmContributers',
    message: 'Would you like to allow other developers to contribute?',
    default: true
  },

  {
    type: 'input',
    name: 'test',
    message: 'Please provide instructions on how to test the app. (Required)',
    validate: testInput => {
      if (testInput) {
        return true;
      } else {
        console.log('Please enter your use test instructions!');
        return false;
      }
    }
  }
];

// TODO: function to write README file

function writeToFile(response ) {
  fs.writeFile('generate-ReadMe.md', response, (err) => {
    if (err) {
      return err;
    } else {
      console.log('success')
    }
    ;
  });
}

//Create a function to initialize app
const init = () => {

  return inquirer.prompt(questions)
    .then(response => {
      return response;
    })
}

// Function call to initialize app
init()
  .then(response => {
    console.log('here',response);
    return generateMarkdown(response);
  })
  .then(response => {
    return writeToFile(response);
  })


