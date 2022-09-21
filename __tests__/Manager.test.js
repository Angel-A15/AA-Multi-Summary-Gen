//File Link
const Manager = require('../lib/Manger.js');

//Manager Example
const manager = new Manager('Ang', '444444', 'us@gmail.com', '691');

//Intern Input Tests
test('return input for manager', () =>{
    expect(manager.name).toBe('Ang');
    expect(manager.id).toBe('444444');
    expect(manager.email).toBe('us@gmail.com');
    expect(manager.officeNumber).toBe('691');
});

test('return input for name', () => {
    expect(manager.getName()).toBe('Ang');
});

test('return input for id', () => {
    expect(manager.getId()).toBe('444444');
});

test('return input for email', () => {
    expect(manager.getEmail()).toBe('us@gmail.com');
});

test('return input for officeNumber', () => {
    expect(manager.getOfficeNumber()).toBe('691');
});

test('return manager generated', () => {
    expect(manager.getRole()).toBe('Manager');
});