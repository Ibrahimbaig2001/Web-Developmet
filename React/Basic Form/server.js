const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend running");
});

// MongoDB connection
mongoose.connect("mongodb+srv://ibrahimbaig2001_db_user:Ibrahimbaig%401234@practice.e7hecrd.mongodb.net/form-data")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Schema
const FormSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  contact: String,
  gender: String,
  subject: Object,
  url: String,
  selectedOption: String,
  about: String,
});

const FormData = mongoose.model("form-data", FormSchema);

// POST route
app.post("/submit", async (req, res) => {
  try {
    const newEntry = new FormData(req.body);
    await newEntry.save();
    res.status(201).json({ message: "Saved successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
