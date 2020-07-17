const mongoose = require("mongoose");
const moment = require("moment");

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema(

);

const EmployeeInformation = mongoose.model("EmployeeInformation", EmployeeSchema);

module.exports = EmployeeInformation;