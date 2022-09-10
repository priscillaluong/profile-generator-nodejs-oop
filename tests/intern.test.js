const {Employee, Manager, Engineer, Intern} = require('../lib/classes.js');

//Test suite
describe('Intern', () => {
    // test spec (unit test)
    it("should create an object with a 'name', 'id', 'email' and 'school' property set to the 'name', 'id', 'email' and 'school' arguments provided when called with the 'new' keyword", () => {
        // Arrange
        const name = 'Priscilla';
        const id = 123;
        const email = 'priscilla@test.com';
        const school = 'Queen Marys Grammar School';
        // Act
        const obj = new Intern(name, id, email, school);
        // Assert 
        expect(`Intern name is ${obj.name}, her id is ${obj.id}, email is: ${obj.email} and school is: ${obj.school}`).toEqual(`Intern name is ${name}, her id is ${id}, email is: ${email} and school is: ${school}`);
    })
    it("should return 'Intern' when the getRole() method is called", () => {
        const obj = new Intern('Priscila', 123, 'priscilla@test.com', 'Queen Marys Grammar School');
        expect(obj.getRole()).toEqual(`Intern`);
    })
})