const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name:String,
    salary:Number,
    programmingLanguage:String,
    city:String,
    isManager:Boolean
})
const Employee = mongoose.model('Employee',employeeSchema);

module.exports = Employee;
