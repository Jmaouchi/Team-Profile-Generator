// require inquirer to be able to prompt the manager (user)
const inquirer = require('inquirer');
// get employer data
const employer = require('./Employer');
// get manager data
const Manager = require('./Manager');
// get engineer data
const Engineer = require('./Engineer');
// get intern data
const Intern = require('./Intern');
// require file system
const fs = require('fs');
// require path methode 
const path = require('path');
// get html code 
const generatePage = require('../src/html')

// create a directory called dist 
const OUTPUT_DIR = path.resolve(__dirname, 'dist')
// send the index.html file to the dist folder 
const outputPath = path.join(OUTPUT_DIR, 'index.html'); 


// teamMembers array that will hold the prompts data
const teamMembers = [];


// start prompting the manager 
const promptManager = () => {
  console.log('prompt manager is called');
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is your name? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is your ID? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your ID number!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is your email address? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your email address number!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is your office number? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your ID number!');
          return false;
        }
      }
    },
  ]).then(managerAnswer => {
  console.log('Manager answer is ',managerAnswer); // thats the data we got back from the 2nd prompt 
  // portfolioData.projects.push(pdata);
  const manager = new Manager (managerAnswer.name, managerAnswer.id, managerAnswer.email, managerAnswer.officeNumber)
  console.log('The role of this employee is:', manager.getRole());
  teamMembers.push(manager);

  addTeamMemmber();
})
};


// if the manager choose to add more members to his team:
const addTeamMemmber = () => {

  return inquirer.prompt([
    {
      type: 'list',
      name: 'add',
      message: "Please select which member you want to add to your team? (Required)",
      choices: ['Engineer', 'Intern', 'finish building my app']
    },
  ])
  .then(managerAdd => {
    console.log('The manager choose to add'.managerAdd);

    switch(managerAdd.add){
      case 'Engineer':
        promptEngineer()
        break;

      case 'Intern':
        addIntern()
        break;
       
      default:
        makeTeam()
        break;
    } 
  })
 }


 // start prompting the manager about engineer infos
 const promptEngineer = () => {
  console.log(`
    ==================
    Add a New Engineer
    ==================
  `);

  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is  your engineer's name? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the name of the added engineer!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the engineer's id? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the added engineer's id!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the engineer's email? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the added engineer's email!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'GitHub',
      message: "What is the engineer's Github? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the added engineer's github!");
          return false;
        }
      }
    }
  ]).then(managerAddedEngineerData => {
    console.log(`the added data is ${managerAddedEngineerData}`);

    // get the Engineer constructor and set the data response as parameters 
    const engineer = new Engineer (managerAddedEngineerData.name, managerAddedEngineerData.id, managerAddedEngineerData.email, managerAddedEngineerData.GitHub);
    console.log('The role of this employee is:', engineer.getRole());
    teamMembers.push(engineer);
    

    // then call the addTeamMember function to ask the manager if he want to add more members to his team
    addTeamMemmber();
  })
  
 };


 // start prompting the manager about Intern infos
 const addIntern = () => {

  console.log(`
    ================
    Add A New Intern
    ================
  `);

  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is  your Intern's name? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is  your Intern's id? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter you added inter's id!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is  your Intern's email? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the added inter's email!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: "What is  your Intern's school? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the added inter's school");
          return false;
        }
      }
    }
  ]).then(managerAddedInternData  => {
    console.log('intern data is:', managerAddedInternData);
  
    const intern = new Intern (managerAddedInternData.name, managerAddedInternData.id, managerAddedInternData.email, managerAddedInternData.school);
    console.log('The role of this employee is:', intern.getRole());
    //push the added intern data to the array
    teamMembers.push(intern)
    // call the addTeamMemmber function to prompt the manager to add more members or finish building his teak 
    addTeamMemmber();
  })
 }



 // finaly if the manager choose to finish building his team:
 const makeTeam = () => {

  // if OUTPUT_DIR does not exist than create one
  if(!fs.existsSync(OUTPUT_DIR)){
    fs.mkdirSync(OUTPUT_DIR)
  }

    //Run the generatePage function using the teamMembers data, then write an html file 
    fs.writeFileSync(outputPath, generatePage(teamMembers), 'utf-8'); // this will take the data from the functions and display it 
   // I also can write the file async like this bellow ===>
          //  fs.writeFile('index.html', generatePage(teamMembers), function(err, data) {
          //   generatePage(teamMembers)
          //  }); but this is kinda more code so i choose to use the Sync way! please tell me if there is which one is better to use in this case
 }


 // run prompt 
 promptManager();