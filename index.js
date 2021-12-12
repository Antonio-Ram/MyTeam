const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');

inquirer
    .prompt([
        {
           type: "input",
           name: "Name",
           message: "Employee name?"
       },
       {
           type: "input",
           name: "ID",
           message: "Employee ID?"
       },
       {
           type: "input",
           name: "Email",
           message: "Employee email?"
       }
    ])
    .then((answers) => {
        fs.writeFile('./index.html', generatePage(name), err => {
            if (err) throw err;
        
            console.log('HTML complete')
        });
    })