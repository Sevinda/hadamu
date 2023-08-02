import mongoose from "mongoose";

const MainNewsSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  description: { type: String, required: true },
  summary: { type: String, required: true },
  photo: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const MainNews = mongoose.model("MainNews", MainNewsSchema);

export { MainNews };
