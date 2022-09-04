// TODO: Include packages needed for this application
const generateHTML = require('./dist/generateHTML.js')
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'name',
      message: "Please enter the team manager's name:",
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter the team manager's id:",
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter the team manager's email address:",
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Please enter the team manager's office number:",
    },
    {
      type: 'list',
      name: 'addEmployee',
      message: 'Please select an employee to add to your team:',
      choices: [
          "Engineer",
          "Intern",
          "Done"
      ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const htmlContent = generateHTML(answers);
        writeToFile("./dist/index.html", htmlContent);
    });
}

// Function call to initialize app
init();
