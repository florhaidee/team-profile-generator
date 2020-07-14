const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Team = require('./lib/Team');

const team = new Team();
const createEmployee = (role) => {
    return inquirer
    .prompt([
        {
            type: 'text',
            name: 'name',
            message: `Please enter ${role}'s name (Required)`,
            validate: nameInput => {
                if (nameInput) {
                return true;
                } else {
                console.log(`Please enter the ${role}'s name!`);
                return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: `Please enter a number as a ${role}'s id (Required)`,
            validate: input => {
                if (!isNaN(input)) {
                    return true;
                }else {
                    return 'Please use "arrow up" to enter a valid number'; 
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `Please ${role}'s email address (Required)`,
            validate:  input => {
                //validate is input is a correct email string
                const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
                if (valid) {
                    return true;
                }else {
                    console.log
                    return 'Please provide a valid email'; 
                }
            }
        }
    ])
    .then (employee =>{
        if (role ==='Manager'){
            return createManager(employee)
        }else if (role ==='Engineer'){
            return createEngineer(employee)
        }else if (role === 'Intern'){
            return createIntern(employee)
        }
    })
};

const createManager = (employee) =>{ 
    let {name,id,email}= employee
    return inquirer
    .prompt([
        {
            type: 'number',
            name: 'officeNumber',
            message: `Please enter Office Number (Required)`,
            validate: input => {
                const valid = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(input)
                if (valid) {
                    team.addManager(name,id,email,input)
                    console.log(team)
                    return true;
                }else {
                    return 'Please use "arrow up" to provide a valid phone number'; 
                }
            }
        }
    ])
    .then(data => menu())
};
const createEngineer = (employee) =>{
    let {name,id,email}= employee
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'github',
            message: `Please enter github username (Required)`,
            validate: input => {
                if (input) {
                    team.addEngineer(new Engineer(name,id,email,input))
                    console.log(team)
                    return true;
                }else {
                    return 'Please enter github username'; 
                }
            }
        },
    ])
    .then(data => menu())
};
const createIntern = (employee)=>{
    let {name,id,email}= employee
    return inquirer
    .prompt([
    {
        type: 'input',
        name: 'school',
        message: `Please enter school (Required)`,
        validate: input => {
            if (input) {
               team.addIntern(new Intern(name,id,email,input))
               console.log(team)
                return true;
            }else {
                return 'Please enter school'; 
            }
        }
    }])
    .then(data => menu())
};
const menu = () => {
    return inquirer
    .prompt(
        {
            type: 'list',
            message: 'Add a new member',
            name: 'choice',
            choices: ['Engineer', 'Intern', 'Finish building my team'],
            filter: (input) => {return input.toLowerCase();}
        }
    )
    .then(({choice}) =>{
        if (choice === 'engineer'){
           return createEmployee('Engineer')
        }else if (choice === 'intern'){
            return createEmployee('Intern')
        }else if (choice === 'finish building my team'){
            return ('Your team is ready. go to dist/ folder to see the file created')
        }    
    })
};

const main= () =>{
    console.log("Welcome to Team Profile Generator: Start addind your Manager's team");
    createEmployee('Manager').then(data=>{
        console.log(team)
    })
}

main()   
