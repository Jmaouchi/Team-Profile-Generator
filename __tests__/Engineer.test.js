// importing data
const Employer = require('../lib/employer');
const Engineer = require('../lib/engineer');


// Test 1 to get engineer's github
test("gets Engineer github", () => {
  const engineer = new Engineer('Dave', '1' , 'djigo.maouchi@yahoo.com', 'Jmaouchi')

  expect(engineer.github).toBe('Jmaouchi');
});



// Test 2 to get engineer's Role
test("gets Engineer role", () => {
  const engineer = new Engineer()

  expect(engineer.getRole()).toBe('engineer');
});


// Test 3 to get the engineer's github calling the getGithub method
test("Get engineer's github with calling the getGitHub method or protoype", () => {
  const engineer = new Engineer('Dave', '1' , 'djigo.maouchi@yahoo.com', 'Jmaouchi');

  expect(engineer.getGithub()).toHaveProperty('github');
});



