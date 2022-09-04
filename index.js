// TODO: Include packages needed for this application
const generateHTML = require('./dist/generateHTML.js')
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'name',
      message: "Please enter employee name:",
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter employee id:",
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter employee email address:",
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Please enter employee office number:",
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

const engineerQs = [
    {
      type: 'input',
      name: 'github',
      message: "Please enter employee github:",
    }
]

const internQs = [
    {
      type: 'input',
      name: 'school',
      message: "Please enter employee school:",
    }
]


class Employee {
    constructor (name, id, email) {
        name = getName();
        id = getId();
        email = getEmail();
    }
    
    getName() {
      
    }

    getId() {
  
    }

    getEmail() {
  
    }
    
    getRole() {
        return `Employee`;
    }
}

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return;
    }
    getRole() {
        return `Manager`;
    }
}

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }
    getGithub() {
        return `${github}`;
    }
    getRole() {
        return `Engineer`;
    }
}

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    getSchool(){
        return `${school}`;
    }
    getRole() {
        return `Intern`;
    }
}

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
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        console.log(manager);
        switch (answers.addEmployee) {
            case 'Engineer':
                inquirer.prompt(engineerQs)
                .then((answers) => {
                    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                    console.log(engineer);
                })
              break;
            case 'Intern':
                inquirer.prompt(internQs)
                .then((answers) => {
                    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                    console.log(intern);
                })
              break;
              case 'Done':

              break;
            default:
              addEmployee = '';
          }
        const htmlContent = generateHTML(answers);
        writeToFile("./dist/index.html", htmlContent);
    });
}

// Function call to initialize app
init();
