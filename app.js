// Packages and Links 
const inquirer = requier('inquirer');
const fs = require('fs');
const ganerateSite = require('../utils/generateSite.js');


const promptUser = () => {
    //Start of Application
    return inquirer.prompt([
        //Team Manager Section
        {
            message: 'This section will be used to fill out the team managers credentials.',
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter the team managers name.',

        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter the team managers employee I.D. number.',

        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter the team managers Email Address.',

        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter the team managers Office number.',

        },
        //Engineer Section
        {
            message: `This section will be used to fill out the engineers credentials.`,
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter the engineers  name.',

        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter the engineers emplyee I.D. number.',

        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter the engineers  Email Address.',

        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter the engineers GitHub Username.',

        },
        //Intern Section
        {
            message: `This section will be used to fill out the interns credentials.`,
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter the interns name.',

        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter the interns employee I.D. number.',

        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter the interns Email Address.',

        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter the interns GitHub Username.',

        },
        //End of Application
    ])
    
};

function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("index.html", generate-site(userInput));
    });
};

// Function call to initialize app
init();