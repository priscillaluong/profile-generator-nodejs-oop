// Create functions to generate HTML code for each class 

function generateEngineer(engineer) {
    return `<div class="col">
    <div class="card employee-card" style="width: 20rem;">
        <img src="#" class="card-img-top" alt="Profile Image">
        <div class="card-body name-bg">
          <h5 class="card-title">${engineer.getName()}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: ${engineer.getEmail()}</li>
          <li class="list-group-item">Get Role: ${engineer.getRole()}</li>
          <li class="list-group-item">Get Role: ${engineer.getGithub()}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
        </div>
      </div>
  </div>`
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
          <li class="list-group-item">Get Role: ${intern.getSchool()}</li>
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
          <li class="list-group-item">Get Role: ${manager.getOfficeNumber()}</li>
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
