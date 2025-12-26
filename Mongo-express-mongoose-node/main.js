// https://www.npmj.com/package/mongodb
// Imposing conditions improves overall security of the database, this cannot be done if we use mongodb package where we have to check using if else statements so that the title is as per the constraints

import mongoose from 'mongoose';
import express from "express";
import { Todo } from "./Todo.js";
let conn = await mongoose.connect("mongodb+srv://ibrahimbaig2001_db_user:Ibrahimbaig%401234@practice.e7hecrd.mongodb.net/")


const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({title:"My first todo", 
        desc:"This is the first todo description",
        completed:false
    })
    todo.save()
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
