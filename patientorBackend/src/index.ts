import express from "express";
import cors from "cors";
import diagnosisRouter from "./routes/diagnoses";
const PORT = 3001;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/ping", (_req, res) => {
  console.log("pong");

  res.send("pong");
});

app.use("/api/diagnoses", diagnosisRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});