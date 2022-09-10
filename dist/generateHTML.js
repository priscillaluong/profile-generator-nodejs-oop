const {Employee, Manager, Engineer, Intern} = require('../lib/classes.js');
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create a function that returns a license badge based 
// on which license is passed in
// If there is no license, return an empty string
let addEmployee;

function generateEmployee(employee) {

}

function generateIntern(intern){
    return `<div class="col">
    <div class="card employee-card" style="width: 20rem;">
        <img src="#" class="card-img-top" alt="Profile Image">
        <div class="card-body name-bg">
          <h5 class="card-title">${intern.getName()}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">Email: ${intern.getEmail()}</li>
          <li class="list-group-item">Get Role: ${intern.getRole()}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
        </div>
      </div>
  </div>`
}

function generateManager(manager){
    return `<div class="col">
    <div class="card employee-card" style="width: 20rem;">
        <img src="#" class="card-img-top" alt="Profile Image">
        <div class="card-body name-bg">
          <h5 class="card-title">${manager.getName()}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Email: ${manager.getEmail()}</li>
          <li class="list-group-item">Get Role: ${manager.getRole()}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
        </div>
      </div>
  </div>`
}

function generateTeam(data){
    let html = [];
    console.log(data.length);
    console.log(data);
    for (const employee in data) {
        console.log(employee.getRole());
    }
/*     html.push(data.filter(employee => employee.getRole() === 'Manager').map(manager => generateManager(manager)));

    html.push(data.filter(employee => employee.getRole() === 'Intern')
    .map(intern => generateIntern(intern))
    .join(""));

    html.push(data.filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => generateEngineer(engineer))
    .join(""));
    return html.join(""); */
}

// TODO: Create a function to generate markdown for README
function generateHTML(data) {
console.log(data);
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
            ${generateTeam(data)}
          </div>
        </div>
  </body>
  </html>`

}

module.exports = generateHTML;
