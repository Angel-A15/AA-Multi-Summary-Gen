// Packages and Links to Files
const inquirer = require('inquirer');

const fs = require('fs');

//File to Structure the Layout
const generateSite = require('./utils/generateSite');

//Files
const Manager = require('./lib/Manger');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//Array will pass in teamProfile
const teamProfile = [];

const init = () => {

//Questin prompt Functions

    //Prompt for Manager Questions
const managerInput = () => {
    console.log(`\nThis section will be used to fill out the managers credentials.\n`)
    //Questions
    inquirer.prompt([
    {
        type: 'input',
        name: 'mngrName',
        message: 'Enter the team managers name.',
    },
    {
        type: 'input',
        name: 'mngrId',
        message: 'Enter the team managers employee I.D. number.',
    },
    {
        type: 'input',
        name: 'mngrEmail',
        message: 'Enter the team managers Email Address.',

    },
    {
        type: 'input',
        name: 'mngrEmail',
        message: 'Enter the team managers Email Address.',

    },
    {
        type: 'input',
        name: 'mngrNumber',
        message: 'Enter the team managers Office number.',

    },
    ])
    .then((input) => {
        const getManager = new Manager(input.mngrName, input.mngrId, input.mngrEmail, input.mngrNumber)
        teamProfile.push(getManager)
        chooseEmployee();
    })
    .catch((error)=> {
        console.log(error)
    })

        
};

//Prompt for Engineer Questions
const engineerInput = () => {
    console.log(`\nThis section will be used to fill out the engineers credentials.\n`)
    //Questions
    inquirer.prompt([
    {
        type: 'input',
        name: 'engnrName',
        message: 'Enter the engineers  name.',

    },
    {
        type: 'input',
        name: 'engnrId',
        message: 'Enter the engineers emplyee I.D. number.',

    },
    {
        type: 'input',
        name: 'engnrEmail',
        message: 'Enter the engineers  Email Address.',

    },
    {
        type: 'input',
        name: 'engnrUsername',
        message: 'Enter the engineers GitHub Username.',

    },
    ])
    .then((input) => {
        const getEngineer = new Engineer(input.engnrName, input.engnrId, input.engnrEmail, input.engnrUsername)
        teamProfile.push(getEngineer)
        chooseEmployee();
    })
    .catch((error)=> {
        console.log(error)
    })
     
};

//Prompt for Intern Questions
const internInput = () => {
    console.log(`\nThis section will be used to fill out the interns credentials.\n`)
    //Questions
    inquirer.prompt([
   
    {
        type: 'input',
        name: 'internName',
        message: 'Enter the interns name.',

    },
    {
        type: 'input',
        name: 'internId',
        message: 'Enter the interns employee I.D. number.',
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'Enter the interns Email Address.',

    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'Enter the interns school.',

    },
    ])
    .then((input) => {
        const getIntern = new Intern(input.internName, input.internId, input.internEmail, input.internSchool)
        teamProfile.push(getIntern)
        chooseEmployee();
    })
    .catch((error)=> {
        console.log(error)
    })
     
};

//Prompt for Employee Selection
const chooseEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'profile',
            message: 'Select which member you would like to add next.',
            choices: ['Engineer', 'Intern', 'Done']
        }
    ])
    .then(teamChoice => {

        switch(teamChoice.profile) {

            case 'Engineer':
                engineerInput();
                break;

            case 'Intern':
                internInput();
                break;
            
            default:
                generateProfile();
        }
    })
}
//End of Questin Prompt Functions

//Funciton to transfer data and get generated site
const generateProfile = () => {
    fs.writeFileSync('./dist/index.html', generateSite(teamProfile))
}

managerInput();

//Function invoke to start application


};


// Function call to initialize app
init();