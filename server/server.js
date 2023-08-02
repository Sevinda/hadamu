import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import router from "./routes/routes.js";

dotenv.config();

const port = 8080;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", router);

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Connected to MongoDB");
  app.listen(port, () =>
    console.log("Server has started on port http://localhost:8080")
  );
});
