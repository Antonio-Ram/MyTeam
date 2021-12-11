const Employee = require('../lib/Employee.js');

test('creates a employee object', () => {
    const employee = new Employee('Josh');

    expect(employee.name).toBe('Josh');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('name@company.com')
});
