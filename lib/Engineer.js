const Employer = require('./Employer');
  

class Engineer extends Employer {

  constructor(name, id, email, github){
    super(name, id, email)
    this.github = github
  }

  getRole(){
    console.log('my role is an engineer');
    return this.role = 'engineer'
  }

  getGithub(){
    console.log('my github is :', this.github);
    return {
      github: this.github
    };
  }
}

// Extra test for the extra methods that the engineer class has 
const person1 = new Engineer('zaha',2 , 'djigo.maouchi@yahoo.com', 'manager', 'jmaouchi')
person1.getEmail();   
person1.getRole()
person1.getGithub()



module.exports = Engineer;