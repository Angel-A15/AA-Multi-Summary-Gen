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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">Team Constructor</h1>
      </div>
    </header>

    <main class="container my-5">
          
      ${genereateTeam(employeeSections)}

    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; </h3>
    </footer>
  </body>
  </html>
  `;

}

