// const n: number = process.argv.length;

// if (n < 4) {
//   throw new Error("Incorrect number of arguments");
// }

// const period: Array<number> = [];

// for (let i = 2; i < n - 1; i++) {
//   const day = Number(process.argv[i]);
//   if (isNaN(day)) {
//     throw new Error("Provided values were not numbers");
//   }
//   period.push(day);
// }

// const target = Number(process.argv[n - 1]);
// if (isNaN(target)) {
//   throw new Error("Provided values were not numbers");
// }

type Rating = 1 | 2 | 3;

interface Result {
  periodLength: number;
  trainingDays: number;
  target: number;
  averageTime: number;
  success: boolean;
  rating: Rating;
  ratingDescription: string;
}

export const calculateExercises = (
  exerciseHours: Array<number>,
  target: number
): Result => {
  const periodLength: number = exerciseHours.length;
  const trainingDays: number = exerciseHours.filter((day) => day !== 0).length;
  let success = false;
  if (exerciseHours.find((day) => day < target)) {
    success = false;
  } else {
    success = true;
  }
  const averageTime: number =
    exerciseHours.reduce((acc, day) => acc + day, 0) / periodLength;

  let ratingDescription = "";
  let rating: Rating = 1;
  if (averageTime < target) {
    ratingDescription = "Not too bad but could be better";
    rating = 1;
  } else if (averageTime === target) {
    ratingDescription = "It was good, keep it up!";
    rating = 2;
  } else if (averageTime > target) {
    ratingDescription = "That was amazing, keep pushing!";
    rating = 3;
  }

  return {
    periodLength,
    trainingDays,
    target,
    averageTime,
    success,
    rating,
    ratingDescription,
  };
};

// console.log(calculateExercises(period, target));
