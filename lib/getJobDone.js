const inquirer = require('inquirer');
const employer = require('./Employer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const fs = require('fs');
const path = require('path');
const generatePage = require('../lib/html')
const teamMembers = [];


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


// if the manager choose to add an engineer than do this:
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


 // if the manager choose to add an intern than do this:
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


 const makeTeam = () => {
   fs.writeFileSync('index.html', generatePage(teamMembers)); // this will take the data from the functions and display it 
   // I also can write the file async like this bellow ===>
          //  fs.writeFile('index.html', generatePage(teamMembers), function(err, data) {
          //   generatePage(teamMembers)
          //  }); but this is kinda more code so i choose to use the Sync way! please tell me if there is which one is better to use in this case
 }

 promptManager();