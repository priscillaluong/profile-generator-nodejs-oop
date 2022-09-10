// Create functions to generate HTML code for each class 

function generateEngineer(engineer) {
    return `<div class="col">
    <div class="card employee-card" style="width: 20rem;">
        <i class="fa-solid fa-laptop-code" style="font-size:38px;padding:10px"></i>
        <div class="card-body name-bg">
          <h5 class="card-title title-styling">${engineer.getName()}</h5>
          <p class="role-styling">${engineer.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">GitHub username: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
        </ul>
        <div class="card-body">
          <a href="mailto:${engineer.getEmail()}" class="card-link">${engineer.getEmail()}</a>
        </div>
      </div>
  </div>`
}

function generateIntern(intern){
    return `<div class="col">
    <div class="card employee-card" style="width: 20rem;">
        <i class="fa-solid fa-user-graduate" style="font-size:38px;padding:10px"></i>
        <div class="card-body name-bg">
          <h5 class="card-title title-styling">${intern.getName()}</h5>
          <p class="role-styling">${intern.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
        <div class="card-body">
          <a href="mailto:${intern.getEmail()}" class="card-link">${intern.getEmail()}</a>
        </div>
      </div>
  </div>`
}

function generateManager(manager){
    return `<div class="col">
    <div class="card employee-card" style="width: 20rem;">
        <i class="fa-solid fa-people-roof" style="font-size:38px;padding:10px"></i>
        <div class="card-body name-bg">
          <h5 class="card-title title-styling">${manager.getName()}</h5>
          <p class="role-styling">${manager.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
        <div class="card-body">
          <a href="mailto:${manager.getEmail()}" class="card-link">${manager.getEmail()}</a>
        </div>
      </div>
  </div>`
}

function generateTeam(data){
    let html = [];
    console.log(data.length);
    console.log(data);
    for (const employee in data) {
        switch (data[employee].getRole()) {
            case 'Manager':
                html.push(generateManager(data[employee]));
            break;
            case 'Engineer':
                html.push(generateEngineer(data[employee]));
            break;
            case 'Intern':
                html.push(generateIntern(data[employee]));
            break;
        }   
    }
    return html.join("");
}

// TODO: Create a function to generate code for index.html
// Call generate team function and filter out objects for manager, engineer and intern.
function generateHTML(data) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
    <title>Our Team</title>
</head>
    <body>
        <header>
            <h1>Our Team</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </header>
        <div class="container text-center container-styling">
            <div class="row justify-content-evenly">
                ${generateTeam(data)}
            </div>
        </div>
  </body>
  </html>`

}

module.exports = generateHTML;
