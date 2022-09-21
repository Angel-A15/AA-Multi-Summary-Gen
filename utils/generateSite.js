const generateHtML = [];

const genereateTeam = (employeeSections) => {

  //HTML Section Structure: Manager
  const generateManager = manager => {

    return`
      <div class="card">

        <h3 class="title">Manager: ${manager.getName()}</h3>
        <p>
          ID: ${manager.getId()}<br>
          Email: ${manager.getEmail()}<br>
          Office Number: ${manager.getOfficeNumber()}
        </p>

      </div>
    `;
  }

  //HTML Section Structure: Engineer
  const generateEngineer = engineer => {

    return`
      <div class="card">

      <h3 class="title">Engineer: ${engineer.getName()}</h3>
      
      <p>
        ID: ${engineer.getId()}
        Email:${engineer.getEmail()}
        GitHub Username: ${engineer.getGitHub()}
      </p>

      </div>
    `;
  }

  //HTML Section Structure: Intern
  const generateIntern = intern => {

    return`
      <div class="card active">

      <h3 class="title">Intern: ${intern.getName()}</h3>
      
      <p>
        ID: ${intern.getId()}
        Email:${intern.getEmail()}
        School: ${intern.getSchool()}
      </p>

      </div>
    `;
  }

  generateHtML.push(employeeSections.filter(employee=>employee.getRole()==='Manager').map(manager => generateManager(manager)));
  generateHtML.push(employeeSections.filter(employee=>employee.getRole()==='Engineer').map(engineer => generateEngineer(engineer)));
  generateHtML.push(employeeSections.filter(employee=>employee.getRole()==='Intern').map(intern => generateIntern(intern)));
  
  return generateHtML.join('');

}


module.exports= employeeSections => {
    return `

    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie-edge">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css">      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
    <header>
    <div class="container flex-row justify-space-between align-center py-3">
      
      <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>

    </div>
    </header>

    <div class="container">
          
      ${genereateTeam(employeeSections)}

    </div>

    <script src="../utils/generateSite.js"></script>
    <script src="../dist/script.js"></script>
  </body>
  </html>
  `;

}

