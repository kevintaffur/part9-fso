import express from "express";
import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";
const app = express();
app.use(express.json());

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack");
});

app.get("/bmi", (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (isNaN(height) || isNaN(weight)) {
    return res.json({
      error: "Malformatted parameters",
    });
  }

  return res.json({
    weight,
    height,
    bmi: calculateBmi(height, weight),
  });
});

app.post("/exercisecalculator", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
  const { dailyExercises, target }: any = req.body;

  if (!dailyExercises || !target) {
    return res.json({
      error: "Parameters missing",
    });
  }

  for (const day of dailyExercises) {
    if (isNaN(Number(day))) {
      return res.json({
        error: "Malformatted parametters",
      });
    }
  }

  if (isNaN(Number(target))) {
    return res.json({
      error: "Malformatted parametters",
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const result = calculateExercises(dailyExercises, target);

  return res.json({ ...result });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
