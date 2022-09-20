const generateHtML = [];

const genereateTeam = (employeeSections) => {

  const generateManager = manager => {

    return`
      <div class="card active">

        <h3 class="title">Manager: ${manager.getName()}</h3>
        
        <p>
          ID: ${manager.getmngrName()}
          EMail:${manager.getEmail}
          Office Number: ${manager.getO}
        </p>

      </div>
    `;
  }

  const generateEmployee = employee => {

    return`
      <div class="card active">

      <h3 class="title">Manager: ${manager.getName()}</h3>
      
      <p>
        ID: ${manager.getmngrName()}
        EMail:${manager.getEmail}
        Office Number: ${manager.getO}
      </p>

      </div>
    `;
  }

  const generateIntern = intern => {

    return`
      <div class="card active">

      <h3 class="title">Manager: ${manager.getName()}</h3>
      
      <p>
        ID: ${manager.getmngrName()}
        EMail:${manager.getEmail}
        Office Number: ${manager.getO}
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
      <title>MyTeam</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css'>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
    <header>
      Team Profile
    </header>

    <div class="container">
          
      ${genereateTeam(employeeSections)}

    </div>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; </h3>
    </footer>
    <script src="../utils/generateSite.js"></script>
    <script src="../dist/script.js"></script>
  </body>
  </html>
  `;

}

