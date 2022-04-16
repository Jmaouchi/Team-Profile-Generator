// importing data
const Employer = require('../lib/employer');


// Test 1 to get the employer name 
test("gets employer's name", () => {
  const employer = new Employer('Dave', 1 , 'djigo.maouchi@yahoo.com', 'https://github.com/Jmaouchi/');

  expect(employer.name).toBe('Dave');
  expect(employer.id).toEqual(expect.any(Number));
  expect(employer.email).toEqual(expect.any(String));
});



// Test 2 to get the employer Id
test("gets employer's id", () => {
  const employer = new Employer('Dave', '1' , 'djigo.maouchi@yahoo.com');

  expect(employer.id).toBe('1');
});



// Test 3 to get the employer email
test("gets employer's email", () => {
  const employer = new Employer('Dave', '1' , 'djigo.maouchi@yahoo.com');

  
  expect(employer.email).toEqual(expect.stringContaining('@'));
});



// Test 4 to get employer's name using the getName method 
test('get employers name',() => {
  const employer = new Employer ('dave', '1', 'djigo.maouchi@yahoo.com ')

  expect(employer.getName()).toEqual(expect.any(String));
})


// Test 4 to get employer's ID using the getID method
test('get employers id',() => {
  const employer = new Employer ('dave', 1, 'djigo.maouchi@yahoo.com', 'employer')

  expect(employer.getId()).toBe(1);
  
})



// Test 4 to get employer's role using the getRole method
test('get employers Role',() => {
  const employer = new Employer ()

  expect(employer.getRole()).toEqual('employer');
  
})