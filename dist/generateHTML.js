const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create a function that returns a license badge based 
// on which license is passed in
// If there is no license, return an empty string
let addEmployee;

const engineerQs = [
    {
      type: 'input',
      name: 'name',
      message: "Please enter the Engineer's name:",
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter the Engineer's id:",
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter the Engineer's email address:",
    },
    {
      type: 'input',
      name: 'github',
      message: "Please enter the Engineer's office number:",
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

function generateEmployee(employee) {
  switch (employee) {
    case 'Engineer':
       
      break;
    case 'Intern':
      
      break;
    default:
      addEmployee = '';
  }
}

// TODO: Create a function to generate markdown for README
function generateHTML(data) {
    const employee = data.addEmployee;
    addNewEmployee(employee);
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <link rel="stylesheet" href="./style.css">
      <title>My Team</title>
  </head>
  <body>
      <header>My Team</header>
      <div class="container text-center">
          <div class="row justify-content-evenly">
            <div class="col">
              <div class="card employee-card" style="width: 20rem;">
                  <img src="#" class="card-img-top" alt="Profile Image">
                  <div class="card-body name-bg">
                    <h5 class="card-title">Card title</h5>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                  </ul>
                  <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                  </div>
                </div>
            </div>
            <div class="col">
              <div class="card employee-card" style="width: 20rem;">
                  <img src="#" class="card-img-top" alt="Profile Image">
                  <div class="card-body name-bg">
                    <h5 class="card-title">Card title</h5>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                  </ul>
                  <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                  </div>
                </div>
            </div>
            <div class="col">
              <div class="card employee-card" style="width: 20rem;">
                  <img src="#" class="card-img-top" alt="Profile Image">
                  <div class="card-body name-bg">
                    <h5 class="card-title">Card title</h5>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                  </ul>
                  <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                  </div>
                </div>
            </div>
            <div class="col">
              <div class="card employee-card" style="width: 20rem;">
                  <img src="#" class="card-img-top" alt="Profile Image">
                  <div class="card-body name-bg">
                    <h5 class="card-title">Card title</h5>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                  </ul>
                  <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                  </div>
                </div>
            </div>
            <div class="col">
              <div class="card employee-card" style="width: 20rem;">
                  <img src="#" class="card-img-top" alt="Profile Image">
                  <div class="card-body name-bg">
                    <h5 class="card-title">Card title</h5>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                  </ul>
                  <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                  </div>
                </div>
            </div>
          </div>
        </div>
  </body>
  </html>`

}

module.exports = generateHTML;
