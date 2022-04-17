const Employer = require('./Employer');

// create an Intern class that will inhirit some methodes from employer class
class Intern extends Employer {

  constructor(name, id, email, school){
    super(name, id, email)

    this.school = school

  }

  getRole(){
    return this.role = 'Intern'
  }
  


  getSchool(){
    return this.school 
  }

}


module.exports = Intern;