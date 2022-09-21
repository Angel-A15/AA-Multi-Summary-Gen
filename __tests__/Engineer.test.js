const Engineer = require('../lib/Engineer.js');

const engineer = new Engineer('Mr.Agui', '123456', 'usern@gmail.com', 'slimie31');

test ('return input of engineer', () => {
    expect(engineer.name).toBe('Mr.Agui');
    expect(engineer.id).toBe('123456');
    expect(engineer.email).toBe('usern@gmail.com');
    expect(engineer.github).toBe('slimie31');
});

test('return input for name', () => {
    expect(engineer.getName()).toBe('Mr.Agui');
});

test('return input for id', () => {
    expect(engineer.getId()).toBe('123456');
});

test('return input for email', () => {
    expect(engineer.getEmail()).toBe('usern@gmail.com');
});

test('return input for username', () => {
    expect(engineer.getGitHub()).toBe('slimie31');
});

test('return engineer generated', () => {
    expect(engineer.getRole()).toBe('Engineer');
});