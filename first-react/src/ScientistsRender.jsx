import { people } from "./data.js";
import { getImageUrl } from "./utils2.js";
import "./reactStyle.css";


let astrophysicist = [];
let everyoneElse = [];
people.forEach((person) => {
  if (person.profession === "astrophysicist") {
    astrophysicist.push(person);
  } else {
    everyoneElse.push(person);
  }
});

function ListSection({ title, people }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function List() {
  return (
    <article>
      <h1>Scientists</h1>
      <ListSection title="Astrophysicist" people={astrophysicist} />
      <ListSection title="Everyone Else" people={everyoneElse} />
    </article>
  );
}
