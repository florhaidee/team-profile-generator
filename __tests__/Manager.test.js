const Manager = require('../lib/Manager');

test('creates a Manager object', ()=>{
    const manager = new Manager('Karen',24,'karen@mytest.com', 8885555555);

    expect(manager.name).toBe('Karen');
    expect(manager.id).toBe(24);
    expect(manager.email).toBe('karen@mytest.com');
    expect(manager.officeNumber).toBe(8885555555);
})
test('gets the manager name', () =>{
    const manager = new Manager('Karen',24,'karen@mytest.com', 8885555555);
    expect(manager.getName()).toEqual(expect.stringContaining('Karen'));
})
test('gets the manager ID', () =>{
    const manager = new Manager('Karen',24,'karen@mytest.com', 8885555555);
    expect(manager.getId()).toBe(24);
})
test('gets the manager email', () =>{
    const manager = new Manager('Karen',24,'karen@mytest.com', 8885555555);
    expect(manager.getEmail()).toEqual(expect.stringContaining('karen@mytest.com'));
})
test('gets the manager role', () =>{
    const manager = new Manager('Karen',24,'karen@mytest.com', 8885555555);
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
})
test('gets the manager office Number', () =>{
    const manager = new Manager('Karen',24,'karen@mytest.com', 8885555555);
    expect(manager.getOfficeNumber()).toBe(8885555555);
})