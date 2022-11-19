import { CoursePart } from "../types";

interface Types {
  courseParts: Array<CoursePart>;
}

const Total = ({ courseParts }: Types) => (
  <p>
    Number of exercises{" "}
    {courseParts.reduce((acc, part) => acc + part.exerciseCount, 0)}
  </p>
);

export default Total;
