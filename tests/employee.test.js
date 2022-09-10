const {Employee, Manager, Engineer, Intern} = require('../lib/classes.js');

//Test suite
describe('Employee', () => {
    // test spec (unit test)
    it("should create an object with a 'name', 'id' and 'email' property set to the 'name', 'id' and 'email' arguments provided when called with the 'new' keyword", () => {
        // Arrange
        const name = 'Priscilla';
        const id = 123;
        const email = 'priscilla@test.com';
        // Act
        const obj = new Employee(name, id, email);
        // Assert 
        expect(`Employee name is ${obj.name}, her id is ${obj.id} and email is: ${obj.email}`).toEqual(`Employee name is ${name}, her id is ${id} and email is: ${email}`);
    })
    it("should return 'Employee when the getRole() method is called", () => {
        const obj = new Employee('Priscila', 123, 'priscilla@test.com');
        expect(obj.getRole()).toEqual(`Employee`);
    })
})