import { CoursePart } from "../types";
import Part from "./Part";

interface Types {
  courseParts: Array<CoursePart>;
}

const Content = ({ courseParts }: Types) => (
  <div>
    {courseParts.map((part) => (
      <Part key={part.name} part={part} />
    ))}
  </div>
);

export default Content;
