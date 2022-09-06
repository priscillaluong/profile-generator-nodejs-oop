// TODO: Include packages needed for this application
const generateHTML = require('./dist/generateHTML.js');
const {Employee, Manager, Engineer, Intern} = require('./lib/classes.js');
const inquirer = require('inquirer');
const fs = require('fs');
let employeesArr = [];

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
    }
/*     {
      type: 'list',
      name: 'addEmployee',
      message: 'Please select an employee to add to your team:',
      choices: [
          "Engineer",
          "Intern",
          "Done"
      ]
    } */
];

const addEmployeeQ = [
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
]

function buildTeam () {
    inquirer.prompt(addEmployeeQ)
    .then((answers) => {
        switch(answers.addEmployee) {
            case 'Engineer':
                inquirer.prompt(engineerQs)
                .then((answers) => {
                    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                    employeesArr.push(engineer);
                    buildTeam();  
                })
                         
            break;
            case 'Intern':
                inquirer.prompt(internQs)
                .then((answers) => {
                    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                    employeesArr.push(intern);
                    buildTeam(); 
                })
                  
            break;
            case 'Done':
                console.log(employeesArr);
                const htmlString = generateHTML(employeesArr);
                fs.writeFile("./dist/index.html", htmlString, (err) =>
                err ? console.log(err) : console.log('Successfully created index.html!')
              );
            break;
        }
    })
}

const engineerQs = [
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
      name: 'github',
      message: "Please enter employee github:",
    }
]

const internQs = [
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
      name: 'school',
      message: "Please enter employee school:",
    }
]

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
        console.log(manager.getRole());
        employeesArr.push(manager);
        console.log(manager);
        buildTeam();
       /*  switch (answers.addEmployee) {
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
          } */
        const htmlContent = generateHTML(answers);
        writeToFile("./dist/index.html", htmlContent);
    });
}

// Function call to initialize app
init();
