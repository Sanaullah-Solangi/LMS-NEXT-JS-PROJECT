import mongoose, { mongo } from "mongoose";
const { Schema, models } = mongoose;

const todoScema = new Schema({
  todo: String,
  id: Number,
  isCompleted: Boolean,
});

const todoModel = mongoose.models.Todos || mongoose.model("Todos", todoScema);

export default todoModel;
