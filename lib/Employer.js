class Employer {

  constructor (name, id, email){
    this.name = name
    this.id = id
    this.email = email
  }

  getName(){
    console.log(`my name is  ${this.name}`);
    return this.name;
  };

  getId(){
    console.log(`my name is  ${this.name} and my id is ${this.id}`);
    return this.id;
    
  };

  getEmail(){
    console.log(`my name is  ${this.name} and my email is ${this.email}`);
    return this.email;
  };



  getRole(){
    return  'employer'; 
}

}


//Extra check for the  methods that the employer has
const manager1 = new Employer ('jugurta' ,2 , 'djigo.maouchi@yahoo.com', 'manager')
const manager2 = new Employer ('john' ,2 , 'djigo.maouchi@yahoo.com', 'manager')
manager1.getName();
manager2.getId();
manager1.getEmail();
manager1.getRole();

module.exports = Employer;