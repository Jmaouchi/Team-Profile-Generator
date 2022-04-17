// importing data
const Employer = require('../lib/employer');
const Manager = require('../lib/manager');


// Test 2 to get managers's github
test("gets manager github", () => {
  const manager = new Manager()

  expect(manager.getRole()).toBe('Manager');
});


// Test 3 to get managers's office number
test("Get manager's office number", () => {
  const manager = new Manager('Dave', '1' , 'djigo.maouchi@yahoo.com', 'Jmaouchi');

  expect(manager.getOfficeNumber()).toHaveProperty('officeNumber');
});



// Test 4 to check if the getId method is called correcty (method that we inhirited from employer constructor)
test('get employers id',() => {
  const employer = new Manager ('Dave', 1 , 'djigo.maouchi@yahoo.com')

  expect(employer.getId()).toEqual(expect.any(Number));
  
})

