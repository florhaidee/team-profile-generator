const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
class Team {
    constructor() {
        this.manager ={};
        this.engineer = [];
        this.intern = [];
    }
    addManager(name,id,email,officeNumber){
        this.manager = new Manager(name,id,email,officeNumber)
    }
    addEngineer(engineer){
        let {name,id,email,gitHub}= engineer;
        this.engineer.push(new Engineer(name,id,email,gitHub));   
    }
    addIntern(intern){
        let {name,id,email,school}= intern;
        this.intern.push(new Intern(name,id,email,school));
    }
    getManager(){
        return this.manager;
    }
    getEngineer(){
        return this.engineer;
    }
    getIntern(){
        return this.intern;
    }
}
module.exports = Team;