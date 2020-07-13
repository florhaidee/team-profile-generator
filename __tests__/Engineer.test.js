const Engineer = require('../lib/Engineer');

test('creates a Engineer object', ()=>{
    const engineer = new Engineer('Mary',29,'mary@mytest.com', 'mary49');

    expect(engineer.name).toBe('Mary');
    expect(engineer.id).toBe(29);
    expect(engineer.email).toBe('mary@mytest.com');
    expect(engineer.gitHub).toBe('mary49');
})
test('gets the Engineer name', () =>{
    const engineer = new Engineer('Mary',29,'mary@mytest.com', 'mary49');
    expect(engineer.getName()).toEqual(expect.stringContaining('Mary'));
})
test('gets the Engineer ID', () =>{
    const engineer = new Engineer('Mary',29,'mary@mytest.com', 'mary49');
    expect(engineer.getId()).toBe(29);
})
test('gets the Engineer email', () =>{
    const engineer = new Engineer('mary',29,'mary@mytest.com', 'mary49');
    expect(engineer.getEmail()).toEqual(expect.stringContaining('mary@mytest.com'));
})
test('gets the Engineer role', () =>{
    const engineer = new Engineer('mary',29,'mary@mytest.com', 'mary49');
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
})
test('gets the Engineer gitHub username', () =>{
    const engineer = new Engineer('mary',29,'mary@mytest.com', 'mary49');
    expect(engineer.getGitHub()).toEqual(expect.stringContaining('mary49'));
})