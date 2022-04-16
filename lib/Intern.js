const Employer = require('./Employer');

class Intern extends Employer {

  constructor(name, id, email, school){
    super(name, id, email)

    this.school = school

  }



  getRole(){
    return this.role = 'intern'
  }
  


  getSchool(){
    return this.school 
  }

}


module.exports = Intern;