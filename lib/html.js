const generateTeam = (teamData) => {
  console.log(teamData);

  const html = [];


  const generateManager = manager => {
    let managerHtml = `
    
    <!-- main child 1st child -->
    <div class="col">
      <div class="" id="top-col">
        <h2 class="text-center display-3 mt-3 text-light"><i>Jared</i></h2>
        <h3 class="text-center mt-4 text-light"><i class="fa-solid fa-mug-hot mr-4 text-light"></i>Manager</h3>
      </div>
       
      <div class="bg-primary" id="buttom-col">
        <p><span>id</span>1</p>
        <p><span>Email</span>djigo.maouchi@yahoo.com</p>
        <p><span>Office Number</span>210.668.9245</p>
      </div>
    </div>
    
    `
    html.push(managerHtml)
  }



  const generateEngineer = engineer  => {
    let engineerHtml = `
    
    <!-- main child 1st child -->
    <div class="col">
      <div class="" id="top-col">
        <h2 class="text-center display-3 mt-3 text-light"><i>Jared</i></h2>
        <h3 class="text-center mt-4 text-light"><i class="fa-solid fa-mug-hot mr-4 text-light"></i>Manager</h3>
      </div>
       
      <div class="bg-primary" id="buttom-col">
        <p><span>id</span>1</p>
        <p><span>Email</span>djigo.maouchi@yahoo.com</p>
        <p><span>Office Number</span>210.668.9245</p>
      </div>
    </div>
    
    `
    html.push(engineerHtml)

  }



  const generateIntern = Intern  => {
    let InternHtml = `
    
    <!-- main child 1st child -->
    <div class="col">
      <div class="" id="top-col">
        <h2 class="text-center display-3 mt-3 text-light"><i>Jared</i></h2>
        <h3 class="text-center mt-4 text-light"><i class="fa-solid fa-mug-hot mr-4 text-light"></i>Manager</h3>
      </div>
       
      <div class="bg-primary" id="buttom-col">
        <p><span>id</span>1</p>
        <p><span>Email</span>djigo.maouchi@yahoo.com</p>
        <p><span>Office Number</span>210.668.9245</p>
      </div>
    </div>
    
    `
    html.push(InternHtml);
}


for (let i = 0; i<teamData.length ; i++){
  if(teamData[i].getRole() === "manager"){
    generateManager(teamData[i])
  }
  if(teamData[i].getRole() === "engineer"){
    generateManager(teamData[i])
  }
  if(teamData[i].getRole() === "intern"){
    generateManager(teamData[i])
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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3"></h1>
        <nav class="flex-row">
          <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/">GitHub</a>
        </nav>
      </div>
    </header>
    <main class="container my-5">
      ${generateTeam(teamData)}
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy;2020 by </h3>
    </footer>
  </body>
  </html>
  `;
};
