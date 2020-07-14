const inquirer = require('inquirer');
const emailValidator = require('email-validator');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const engineerArray = [];
const internArray = [];
const manager = {};
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
                const val = emailValidator.validate(input);
                if (val) {
                    return true;
                }else {
                    console.log
                    return 'Please provide a valid email'; 
                }
            }
        }
    ])
};
const createManager = (employee) =>{ 
    let {name,id,email}= employee
    return inquirer
    .prompt(
        {
            type: 'number',
            name: 'officeNumber',
            message: `Please enter Office Number (Required)`,
            validate: input => {
                //console.log(input.value)
                // regex= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                // let val = input.value.match(regex);
                if (input) {
                    this.manager = new Manager(name,id,email,input)
                    return true;
                }else {
                    console.log
                    return 'Please use "arrow up" to provide a valid phone number'; 
                }
            }
        }
    // ).then(data =>{
    //     console.log(data)
    // }
    )
}

createEmployee('Manager')
    .then(createManager)
    .then(data =>{console.log('DATA',data, 'MANAGER', this.manager)})
    .catch(err => {
        console.log(err);
      });
