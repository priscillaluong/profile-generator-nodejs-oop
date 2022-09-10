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
      message: "Please enter manager's name:",
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter manager's ID:",
      validate: (answer) => {
        if (isNaN(answer)) {
          return "Please enter numbers only:";
        }
        return true;
    },
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter manager's email address:",
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Please enter manager's office number:",
      validate: (answer) => {
        if (isNaN(answer)) {
          return "Please enter numbers only:";
        }
        return true;
    },
    }
];

const addEmployeeQ = [
    {
      type: 'list',
      name: 'addEmployee',
      message: 'Please select an employee to add to your team:',
      choices: [
          "Engineer",
          "Intern",
          "I have finished building the team"
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
            case 'I have finished building the team':
                console.log(employeesArr);
                for (const employee in employeesArr) {
                    console.log("-------------------------")
                    console.log(employeesArr[employee].getRole());
                }
                const htmlContent = generateHTML(employeesArr);
                writeToFile("./dist/index.html", htmlContent);
            break;
        }
    })
}

const engineerQs = [
    {
      type: 'input',
      name: 'name',
      message: "Please enter engineer's name:",
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter engineer's ID:",
      validate: (answer) => {
        if (isNaN(answer)) {
          return "Please enter numbers only:";
        }
        return true;
    },
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter engineer's email address:",
    },
    {
      type: 'input',
      name: 'github',
      message: "Please enter engineer's GitHub username:",
    }
]

const internQs = [
    {
      type: 'input',
      name: 'name',
      message: "Please enter intern's name:",
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter intern's ID:",
      validate: (answer) => {
        if (isNaN(answer)) {
          return "Please enter numbers only:";
        }
        return true;
    },
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter intern's email address:",
    },
    {
      type: 'input',
      name: 'school',
      message: "Please enter intern's school:",
    }
]

// TODO: Create a function to write HTML file
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
        employeesArr.push(manager);
        buildTeam();
    });
}

// Function call to initialize app
init();