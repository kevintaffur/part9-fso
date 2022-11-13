if (process.argv.length < 4 || process.argv.length > 4) {
  throw new Error("Incorrect number of arguments");
}

if (isNaN(Number(process.argv[2])) || isNaN(Number(process.argv[3]))) {
  throw new Error("Provided values were not numbers");
}

const height: number = Number(process.argv[2]);
const weight: number = Number(process.argv[3]);

const calculateBmi = (height: number, weight: number): string => {
  const heightInMeters: number = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  switch (true) {
    case bmi < 16:
      return "Underweight (Severe thinness)";
    case bmi < 17:
      return "Underweight (Moderate thinness)";
    case bmi < 18.5:
      return "Underweight (Mild thinness)";
    case bmi < 25:
      return "Normal range (Healthy weight)";
    case bmi < 30:
      return "Overweight (Pre-obese)";
    case bmi < 35:
      return "Obese (Class I)";
    case bmi < 40:
      return "Obese (Class II)";
    case bmi >= 40:
      return "Obese (Class III)";
    default:
      return "";
  }
};

console.log(calculateBmi(height, weight));
