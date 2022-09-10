const {Employee, Manager, Engineer, Intern} = require('../lib/classes.js');

//Test suite
describe('Engineer', () => {
    // test spec (unit test)
    it("should create an object with a 'name', 'id', 'email' and 'github' property set to the 'name', 'id', 'email' and 'github' arguments provided when called with the 'new' keyword", () => {
        // Arrange
        const name = 'Priscilla';
        const id = 123;
        const email = 'priscilla@test.com';
        const github = 'https://github.com/priscillaluong'
        // Act
        const obj = new Engineer(name, id, email, github);
        // Assert 
        expect(`Engineer name is ${obj.name}, her id is ${obj.id}, email is: ${obj.email} and github link is: ${obj.github}`).toEqual(`Engineer name is ${name}, her id is ${id}, email is: ${email} and github link is: ${github}`);
    })
    it("should return 'Engineer' when the getRole() method is called", () => {
        const obj = new Engineer('Priscila', 123, 'priscilla@test.com', 'https://github.com/priscillaluong');
        expect(obj.getRole()).toEqual(`Engineer`);
    })
})