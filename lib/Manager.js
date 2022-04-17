const Employer = require('./Employer');
  
// create an Manager class that will inhirit some methodes from employer class
class Manager extends Employer {

  constructor(name, id, email, officeNumber){

    super(name, id, email)
    this.officeNumber = officeNumber

  }

  getRole(){
    return this.role = 'Manager'
  }

  getOfficeNumber(){
    console.log('My name is Jugurta and  My office Number is :', this.officeNumber);
    return {
      officeNumber: this.officeNumber
    };
  }
}


// Extra test for the extra methods that the manager class has  
const person1 = new Manager ('zaha', 2 , 'djigo.maouchi@yahoo.com', '210-555-5555')
person1.getOfficeNumber()



module.exports = Manager;