import mongoose from "mongoose";

const MainNewsSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  description: { type: String, required: true },
  summary: { type: String },
  photo: { type: String },
});

const MainNews = mongoose.model("MainNews", MainNewsSchema);

export { MainNews };
