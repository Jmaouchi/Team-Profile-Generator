const Manager = require("../lib/Manager");

const generateTeam = (teamData) => {
  console.log(teamData);

  const html = [];

  const generateManager = Manager => {
    let managerHtml = `
    
    <!--section main child -->
    <div class="col col-lg-3 col-md-6 col-sm-12">
    <div class="" id="top-col">
      <h2 class="text-center display-3 mt-3"><i>${Manager.name}</i></h2>
      <h3 class="text-center mt-4"><i class="fa-solid fa-mug-hot m-4 text-light display-3"></i> <span class="heading-three text-light">${Manager.getRole()}</span></h3>  
    </div>
     
    <div class="bg-primary" id="buttom-col">
      <p><span class="span">id</span><span class="text-dark m-3">${Manager.id}</span></p>
      <p><span class="span">Email</span><span class="text-dark m-3"><a href="mailto:${Manager.email}">${Manager.email}</a></span></p>
      <p><span class="span">Office Number</span><span class="text-dark m-3">${Manager.officeNumber}</span></p>
    </div>
  </div>
    
    `
    html.push(managerHtml)
  }



  const generateEngineer = Engineer  => {
    let engineerHtml = `
    
    <!--section main child -->
    <div class="col col-lg-3 col-md-6 col-sm-12">
    <div class="" id="top-col">
      <h2 class="text-center display-3 mt-3"><i>${Engineer.name}</i></h2>
      <h3 class="text-center mt-4"><i class="fa-solid fa-glasses m-4 display-3 text-light"></i><span class="heading-three text-light">${Engineer.getRole()}</span></h3>
    </div>
     
    <div class="bg-primary" id="buttom-col">
      <p><span class="span">id</span><span class="text-dark m-3">${Engineer.id}</span></p>
      <p><span class="span">Email</span><span class="text-dark m-3"><a href="mailto:${Engineer.email}">${Engineer.email}</a></span></p>
      <p><span class="span">GitHub</span><span class="text-dark m-3">${Engineer.github}</span></p>
    </div>
  </div>
    
    `
    html.push(engineerHtml)

  }



  const generateIntern = Intern  => {
    let InternHtml = `
    
    <!--section main child -->
    <div class="col col-lg-3 col-md-6 col-sm-12">
    <div class="" id="top-col">
      <h2 class="text-center display-3 mt-3"><i>${Intern.name}</i></h2>
      <h3 class="text-center mt-4"><i class="fa-solid fa-graduation-cap m-4 text-light display-3"></i> <span class="heading-three text-light">${Intern.getRole()}</span></h3>
    </div>
     
    <div class="bg-primary" id="buttom-col">
      <p><span class="span">id</span><span class="text-dark m-3">${Intern.id}</span></p>
      <p><span class="span">Email</span><span class="text-dark m-3"><a href="mailto:${Intern.email}">${Intern.email}</a></span></p>
      <p><span class="span">School</span><span class="text-dark m-3">${Intern.school}</span></p>
    </div>
  </div>
    
    `
    html.push(InternHtml);
}


for (let i = 0; i< teamData.length ; i++){
  if(teamData[i].getRole() === "Manager"){
    generateManager(teamData[i])
  }
  if(teamData[i].getRole() === "Engineer"){
    generateEngineer(teamData[i])
  }
  if(teamData[i].getRole() === "Intern"){
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
