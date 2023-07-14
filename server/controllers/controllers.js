import { MainNews } from "../models/MainNewsModel.js";

// GET ALL NEWSPAPER DATA
const getAllNewspapers = async (req, res) => {
  try {
    const newspapers = await MainNews.find();
    res.status(200).json(newspapers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST A NEWSPAPER
const postNewspaper = async (req, res) => {
  try {
    // DESTRUCTURE THE REQUEST BODY
    const { topic, description, summary, photo } = req.body;
    const newspaper = {};

    newspaper.topic = topic;
    newspaper.description = description;
    if (summary) newspaper.summary = summary;
    if (photo) newspaper.photo = photo;

    // CREATE A NEW NEWSPAPER
    const newNewspaper = new MainNews(newspaper);

    // SAVE THE NEW NEWSPAPER
    const savedNewspaper = await newNewspaper.save();
    res.status(200).json(savedNewspaper);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE A NEWSPAPER
const deleteNewspaper = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNewspaper = await MainNews.findByIdAndDelete(id);
    res.status(200).json(deletedNewspaper);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// EXPORT THE CONTROLLER FUNCTIONS
export { getAllNewspapers, postNewspaper, deleteNewspaper };
