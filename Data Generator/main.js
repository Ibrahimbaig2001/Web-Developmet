const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Employee = require('./models/Employee')
conn = mongoose.connect('mongodb+srv://ibrahimbaig2001_db_user:Ibrahimbaig%401234@practice.e7hecrd.mongodb.net/company');
const port = 3000;
app.set('view engine','ejs');
const getRandom = (arr) => {
    let rno = Math.floor(Math.random()* (arr.length-1));
    return arr[rno];
}
app.get('/',(req,res)=>{
    res.render('index',{foo:'FOO'})
})
app.get('/generate',async (req,res)=>{
    // Clear the existing records in the employees collection
    await Employee.deleteMany({})
    let RandomNames = ['Rohan','Sohan','Mohan','Raza','Amit','Suman','Raju','Jaggu','Bheem','Doremon']
    let RandonmCities =['Hyderabad','Bangalore','Chennai','Mumbai','Delhi','Kolkata','Pune','Noida','Gurgaon','Ahmedabad']
    let ProgrammingLanguage = ['Python','JavaScript','C++','Java','C#','C']
    for(let i =0 ; i<10;i++){
        let e = await Employee.create({
            name:getRandom(RandomNames),
            salary: Math.floor(Math.random()* 22000),
            programmingLanguage:getRandom(ProgrammingLanguage),
            city:getRandom(RandonmCities),
            isManager: Math.random() < 0.5 ? true : false
        })
    }
    res.render('index',{foo:'FOO'})
})
app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
})