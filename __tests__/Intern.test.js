// importing data
const Employer = require('../lib/employer');
const Intern = require('../lib/intern');

// Test 1 to get Intern's school
test("gets Intern's school", () => {
  const intern = new Intern('Dave', '1' , 'djigo.maouchi@yahoo.com', 'UTSA')

  expect(intern.school).toBe('UTSA');
});


// Test 3 to get Interns's role
test('get the intern role', () => {
  const intern = new Intern()

  expect(intern.getRole()).toEqual('intern')
})

// Test 3 to get Interns's role calling the getSchool method 
test('gets the intern school', () => {
  const intern = new Intern('Dave', '1' , 'djigo.maouchi@yahoo.com', 'UTSA')

  expect(intern.getSchool()).toEqual(expect.any(String))
})