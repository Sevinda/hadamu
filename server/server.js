import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", (req, res) => {
  res.json({ mssg: "Hello" });
});

app.listen(8080, () =>
  console.log("Server has started on port http://localhost:8080")
);
