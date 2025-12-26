import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: String,
  desc: String,
  completed: Boolean
});

export const Todo = mongoose.model("Todo", todoSchema);

