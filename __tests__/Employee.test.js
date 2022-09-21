
const Employee = require('../lib/Employee.js');

const employee = new Employee('Mr. Aguilar', '420132', 'username@gmail.com');

test ('return input of employee', () => {
    expect(employee.name).toBe('Mr. Aguilar');
    expect(employee.id).toBe('420132');
    expect(employee.email).toBe('username@gmail.com');
});

test('return input for name', () => {
    expect(employee.getName()).toBe('Mr. Aguilar');
});

test('return input for id', () => {
    expect(employee.getId()).toBe('420132');
});

test('return input for username', () => {
    expect(employee.getEmail()).toBe('username@gmail.com');
});

test('return employee generated', () => {
    expect(employee.getRole()).toBe('Employee');
});