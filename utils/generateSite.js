// //create the employee information section
// const generateSections = projectsArr  => {

//     return `
//       <section class="my-3" id="Site">
//         <h2 class="text-dark bg-primary p-2 display-inline-block">Team</h2>
//         <div class="flex-row justify-space-between">
//         ${projectsArr
//           .filter(({ feature }) => feature)
//           .map(({ name, description, languages, link }) => {
//             return `
//             <div class="col-12 mb-2 bg-dark text-light p-3">
//               <h3 class="portfolio-item-title text-light">${name}</h3>
//               <h5 class="portfolio-languages">
//                 Built With:
//                 ${languages.join(', ')}
//               </h5>
//               // <p>${description}</p>
//               <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
//             </div>
//           `;
//           })
//           .join('')}
  
//         ${projectsArr
//           .filter(({ feature }) => !feature)
//           .map(({ name, description, languages, link }) => {
//             return `
//             <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
//               <h3 class="portfolio-item-title text-light">${name}</h3>
//               <h5 class="portfolio-languages">
//                 Built With:
//                 ${languages.join(', ')}
//               </h5>
//               <p>${description}</p>
//               <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
//             </div>
//           `;
//           })
//           .join('')}
//         </div>
//       </section>
//     `;
// };

 
function generateSite(data) {
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
          
      ${generateSections(data)}

    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; </h3>
    </footer>
  </body>
  </html>
  `;

    
  
};

module.exports=generateSite;