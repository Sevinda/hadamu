import express from "express";
const router = express.Router();

import {
  getAllNewspapers,
  postNewspaper,
  deleteNewspaper,
  getNewspaper,
} from "../controllers/controllers.js";

// GET ALL NEWSPAPER DATA
router.get("/get/newspapers", getAllNewspapers);

// GET A NEWSPAPER DATA
router.get("/get/newspaper/:id", getNewspaper);

// POST A NEWSPAPER
router.post("/post/newspaper", postNewspaper);

// DELETE A NEWSPAPER
router.delete("/delete/newspaper/:id", deleteNewspaper);

export default router;
