import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  
  title: { type: String, required: true, min: 3 },
  raiting: { type: Number, required: true, min: 1 },
  description: { type: String, required: true, min: 3 },
  imdbLink: { type: String, required: true, min: 3 },
  realeseYear:  { type: Number, required: true, min: 4 }
});

export default mongoose.model("Task", taskSchema);
