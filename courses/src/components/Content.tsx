import { CoursePart } from "../types";

interface Types {
  courseParts: Array<CoursePart>;
}

const Content = ({ courseParts }: Types) => (
  <div>
    <p>
      {courseParts[0].name} {courseParts[0].exerciseCount}
    </p>
    <p>
      {courseParts[1].name} {courseParts[1].exerciseCount}
    </p>
    <p>
      {courseParts[2].name} {courseParts[2].exerciseCount}
    </p>
  </div>
);

export default Content;
