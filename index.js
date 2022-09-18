// Packages and Links 
const inquirer = require('inquirer');

const fs = require('fs');

// const ganerateSite = require('./generateSite.js');



//Questin prompt Function
const promptUser = [
    //Start of Application

        //Team Manager Section
        {
            
            message: 'This section will be used to fill out the team managers credentials.',
            name: 'team',
        },
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
            name: 'mngrNumber',
            message: 'Enter the team managers Office number.',

        },
        //Engineer Section
        {
            
            message: `This section will be used to fill out the engineers credentials.`,
            name: 'team',
        },
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
        //Intern Section
        {
            message: `This section will be used to fill out the interns credentials.`,
            name: 'team',
        },
        {
            type: 'input',
            name: 'internName',
            message: 'Enter the interns name.',

        },
        {
            type: 'input',
            name: 'internId ',
            message: 'Enter the interns employee I.D. number.',

        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Enter the interns Email Address.',

        },
        {
            type: 'input',
            name: 'internUsername',
            message: 'Enter the interns GitHub Username.',

        },
        //End of Application

    
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err){
            return console.log(err);
        }
        console.log("Your employee entry has been generated. ")
    })
};

function init() {
    inquirer.prompt(promptUser)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("index.html", generate-site(userInput));
    });
};

// Function call to initialize app
init();