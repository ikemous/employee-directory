const mongoose = require("mongoose");
const employees = require("../models/employees.js");

mongoose.connect("mongodb://localhost/employees", {
    useNewUrlParser: true,
    useFindAndModify: false
});

const employeeInformationSeed= [
    {
        firstname: "Ike",
        lastname: "barranco",
        department: "Intern",
        pay: 20000
    },
    {
        firstname: "Fred",
        lastname: "Jones",
        department: "Management",
        manager: true,
        pay: 65000
    },
    {
        firstname: "Velma",
        lastname: "Dinkly",
        department: "Investigation",
        pay: 65000
    },
    {
        firstname: "Daphne",
        lastname: "Blake",
        department: "Investigation",
        pay: 100000
    },
    {
        firstname: "Scoobert",
        lastname: "Doo",
        department: "Chef",
        pay: 10000
    },
    {
        firstname: "Shaggy",
        lastname: "Rogers",
        department: "Chef",
        pay: 10000
    }
];

employees.deleteMany({})
.then(() => employees.insertMany(employeeInformationSeed))
.then(() => {
    console.log(" records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});