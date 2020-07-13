const Intern = require('../lib/Intern');

test('creates a Intern object', ()=>{
    const intern = new Intern('Dave',123,'dave@mytest.com', 'University of Utah');

    expect(intern.name).toBe('Dave');
    expect(intern.id).toBe(123);
    expect(intern.email).toBe('dave@mytest.com');
    expect(intern.school).toBe('University of Utah');
})
test('gets the Intern name', () =>{
    const intern = new Intern('Dave',123,'dave@mytest.com', 'University of Utah');
    expect(intern.getName()).toEqual(expect.stringContaining('Dave'));
})
test('gets the Intern ID', () =>{
    const intern = new Intern('Dave',123,'dave@mytest.com', 'University of Utah');
    expect(intern.getId()).toBe(123);
})
test('gets the Intern email', () =>{
    const intern = new Intern('Dave',123,'dave@mytest.com', 'University of Utah');
    expect(intern.getEmail()).toEqual(expect.stringContaining('dave@mytest.com'));
})
test('gets the Intern role', () =>{
    const intern = new Intern('Dave',123,'dave@mytest.com', 'University of Utah');
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
})
test('gets the Intern school name', () =>{
    const intern = new Intern('Dave',123,'dave@mytest.com', 'University of Utah');
    expect(intern.getSchool()).toEqual(expect.stringContaining('University of Utah'));
})