const mongoose = require("mongoose");
const employees = require("../models/employees.js");

mongoose.connect("mongodb://localhost/employees", {
    useNewUrlParser: true,
    useFindAndModify: false
});

const employeeInformationSeed= [
    {
        firstname: "Eevee",
        lastname: "Barranco",
        department: "Management",
        pay: 190000
    },
    {
        firstname: "Mike Tyson",
        lastname: "Barranco",
        department: "Management",
        pay: 190000
    },
    {
        firstname: "Ike",
        lastname: "barranco",
        department: "Intern",
        pay: 20000
    },
    {
        firstname: "talia",
        lastname: "cobb",
        department: "Intern",
        pay: 21000
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
    },
    {
        firstname: "Seto",
        lastname: "Kaiba",
        department: "Management",
        pay: 150000
    },
    {
        firstname: "Yugi",
        lastname: "Mutou",
        department: "Duelist",
        pay: 30000
    },
    {
        firstname: "Joey",
        lastname: "Wheeler",
        department: "Duelist",
        pay: 30000
    },
    {
        firstname: "Yami",
        lastname: "Yugi",
        department: "Management",
        pay: 50000
    },
    {
        firstname: "Yusei",
        lastname: "Fudo",
        department: "Management",
        pay: 80000
    },
    {
        firstname: "Akiza",
        lastname: "Izinski",
        department: "Duelist",
        pay: 80000
    },
    {
        firstname: "Erina",
        lastname: "Nakiri",
        department: "Management",
        pay: 200000
    },
    {
        firstname: "Ikumi",
        lastname: "Mito",
        department: "Chef",
        pay: 2000
    },
    {
        firstname: "Megumi",
        lastname: "Tadokoro",
        department: "Chef",
        pay: 11000
    },
    {
        firstname: "Satoshi",
        lastname: "Isshki",
        department: "Management",
        pay: 25000
    },
    {
        firstname: "Sōma",
        lastname: "Yukihira",
        department: "Management",
        pay: 50000
    },
    {
        firstname: "Mabel",
        lastname: "Pines",
        department: "Sibling",
        pay: 0
    },
    {
        firstname: "Dipper",
        lastname: "Pines",
        department: "Sibling",
        pay: 0
    },
    {
        firstname: "Grunkle",
        lastname: "Stan",
        department: "Management",
        pay: 120000
    },
    {
        firstname: "Shawn",
        lastname: "Spencer",
        department: "Detective",
        pay: 20000
    },
    {
        firstname: "Guster",
        lastname: "Burton",
        department: "Detective",
        pay: 1
    },
    {
        firstname: "Juliet",
        lastname: "O'Hara",
        department: "Detective",
        pay: 65000
    },
    {
        firstname: "Carlton",
        lastname: "Lassiter",
        department: "Head Detective",
        pay: 65000
    },
    {
        firstname: "Karen",
        lastname: "Vick",
        department: "Management",
        pay: 160000
    },
    {
        firstname: "Henry",
        lastname: "Spencer",
        department: "Head Detective",
        pay: 75000
    },
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