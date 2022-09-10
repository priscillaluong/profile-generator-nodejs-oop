const {Employee, Manager, Engineer, Intern} = require('../lib/classes.js');

//Test suite
describe('Manager', () => {
    // test spec (unit test)
    it("should create an object with a 'name', 'id', 'email' and 'office number' property set to the 'name', 'id', 'email' and 'office number' arguments provided when called with the 'new' keyword", () => {
        // Arrange
        const name = 'Priscilla';
        const id = 123;
        const email = 'priscilla@test.com';
        const officeNumber = 10
        // Act
        const obj = new Manager(name, id, email, officeNumber);
        // Assert 
        expect(`Manager name is ${obj.name}, her id is ${obj.id}, email is: ${obj.email} and office number is: ${obj.officeNumber}`).toEqual(`Manager name is ${name}, her id is ${id}, email is: ${email} and office number is: ${officeNumber}`);
    })
    it("should return 'Manager' when the getRole() method is called", () => {
        const obj = new Manager('Priscila', 123, 'priscilla@test.com', 10);
        expect(obj.getRole()).toEqual(`Manager`);
    })
})