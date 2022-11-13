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

console.log(calculateBmi(180, 74));
