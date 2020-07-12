const Employee = require('../lib/Employee');

test('creates a Employee object', ()=>{
    const employee = new Employee('John',12,'johnGuerra@mytest.com');

    expect(employee.name).toBe('John');
    expect(employee.id).toBe(12);
    expect(employee.email).toBe('johnGuerra@mytest.com');
})
test('gets the employee name', () =>{
    const employee = new Employee('John',12,'johnGuerra@mytest.com');
    expect(employee.getName()).toEqual(expect.stringContaining('John'));
})
test('gets the employee ID', () =>{
    const employee = new Employee('John',12,'johnGuerra@mytest.com');
    expect(employee.getId()).toBe(12);
})
test('gets the employee email', () =>{
    const employee = new Employee('John',12,'johnGuerra@mytest.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining('johnGuerra@mytest.com'));
})
test('gets the employee role', () =>{
    const employee = new Employee('John',12,'johnGuerra@mytest.com');
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
})