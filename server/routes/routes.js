import express from "express";
const router = express.Router();

import {
  getAllNewspapers,
  postNewspaper,
  deleteNewspaper,
} from "../controllers/controllers.js";

// GET ALL NEWSPAPER DATA
router.get("/get/newspapers", getAllNewspapers);

// POST A NEWSPAPER
router.post("/post/newspaper", postNewspaper);

// DELETE A NEWSPAPER
router.delete("/delete/newspaper/:id", deleteNewspaper);

export default router;
