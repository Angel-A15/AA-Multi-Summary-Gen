//File Link
const Intern = require('../lib/Intern');

//Intern Example
const intern = new Intern('Angel', '654566', 'eme@gmail.com', 'UTSA');

//Inter Input Tests
test ('return input of intern',() => {
    expect(intern.name).toBe('Angel');
    expect(intern.id).toBe('654566');
    expect(intern.email).toBe('eme@gmail.com');
    expect(intern.school).toBe('UTSA');
});

test('return input for name', () => {
    expect(intern.getName()).toBe('Angel');
});

test('return input for id', () => {
    expect(intern.getId()).toBe('654566');
});

test('return input for email', () => {
    expect(intern.getEmail()).toBe('eme@gmail.com');
});

test('return input for school', () => {
    expect(intern.getSchool()).toBe('UTSA');
});

test('return intern generated', () => {
    expect(intern.getRole()).toBe('Intern');
});