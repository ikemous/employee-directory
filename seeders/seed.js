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
        department: "Boss",
        pay: 20000
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