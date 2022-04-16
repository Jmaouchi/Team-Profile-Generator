const Manager = require("./Manager");

const generateTeam = (teamData) => {
  console.log(teamData);

  const html = [];

  const generateManager = Manager => {
    let managerHtml = `
    
    <!--section main child -->
    <div class="col col-3">
      <div class="" id="top-col">
        <h2 class="text-center display-3 mt-3 text-light"><i>${Manager.name}</i></h2>
        <h3 class="text-center mt-4 text-light"><i class="fa-solid fa-mug-hot mr-4 text-light"></i>Manager</h3>
      </div>
       
      <div class="bg-primary" id="buttom-col">
        <p><span>id</span>${Manager.id}</p>
        <p><span>Email</span>${Manager.email}</p>
        <p><span>Office Number</span>${Manager.officeNumber}</p>
      </div>
    </div>
    
    `
    html.push(managerHtml)
  }



  const generateEngineer = Engineer  => {
    let engineerHtml = `
    
    <!--section main child -->
    <div class="col col-3">
      <div class="" id="top-col">
        <h2 class="text-center display-3 mt-3 text-light"><i>${Engineer.name}</i></h2>
        <h3 class="text-center mt-4 text-light"><i class="fa-solid fa-mug-hot mr-4 text-light"></i>Engineer</h3>
      </div>
       
      <div class="bg-primary" id="buttom-col">
        <p><span>id</span>${Engineer.id}</p>
        <p><span>Email</span>${Engineer.email}</p>
        <p><span>GitHub</span>${Engineer.github}</p>
      </div>
    </div>
    
    `
    html.push(engineerHtml)

  }



  const generateIntern = Intern  => {
    let InternHtml = `
    
    <!--section main child -->
    <div class="col col-3">
      <div class="" id="top-col">
        <h2 class="text-center display-3 mt-3 text-light"><i>${Intern.name}</i></h2>
        <h3 class="text-center mt-4 text-light"><i class="fa-solid fa-mug-hot mr-4 text-light"></i>Intern</h3>
      </div>
       
      <div class="bg-primary" id="buttom-col">
        <p><span>id</span>${Intern.id}</p>
        <p><span>Email</span>${Intern.email}</p>
        <p><span>School</span>${Intern.school}</p>
      </div>
    </div>
    
    `
    html.push(InternHtml);
}


for (let i = 0; i< teamData.length ; i++){
  if(teamData[i].getRole() === "manager"){
    generateManager(teamData[i])
  }
  if(teamData[i].getRole() === "engineer"){
    generateEngineer(teamData[i])
  }
  if(teamData[i].getRole() === "intern"){
    generateIntern(teamData[i])
  }
}

return html.join('')

}


// export function to generate entire page
module.exports = teamData => {
  // destructure page data by section
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!--Bootstarp link-->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
  <!--Font awesome link-->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.0.0/css/all.css" integrity="sha384-3B6NwesSXE7YJlcLI9RpRqGf2p/EgVH8BgoKTaUrmKNDkHPStTQ3EyoYjCGXaOTS" crossorigin="anonymous">
  <!--Google fonts link-->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"/>
  <!--Css link-->
  <link rel="stylesheet" href="../dist/style.css">
  <title>Team Members</title>
</head>
<body>


<!-- header start here -->
<header class="container text-center jumbotron bg-primary">
  <h1 class="text-light">My Team</h1>
</header>
<!-- header end here -->


<!--section one start here -->
<section class="" id="main-section"> 
  <!-- main section main child -->
  <div class="row d-flex justify-content-center  align-items-end p-5">
    ${generateTeam(teamData)}
  </div>
  </section>
<script src="./assets/js/app.js"></script>
</body>
</html>
  `;
};
