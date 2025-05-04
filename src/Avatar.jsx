import "./App.css"; // Ensure this file exists and is correctly linked
import { getImageUrl } from "./utils.js";

function Profile({ person, imageSize = 170 }) {
  return (
    <section className="profile">
      <h2>{person.fullName}</h2>
      <img
        className="avatar"
        src={getImageUrl(person, "s")}
        alt={person.fullName}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>WorkStuff:</b> {person.workStuff}
        </li>
        <li>
          <b>Awards: {person.awards.length} </b> ({person.awards.join(", ")})
        </li>
        <li>
          <b>Found:</b> {person.discovery}
        </li>
      </ul>
    </section>
  );
}

export default function PeopleGallery() {
  return (
    <div>
      <h1>Cool People</h1>
      <Profile
        person={{
          imageId: "szV5sdG",
          fullName: "Mary Curie",
          workStuff: "physicist, chemist",
          discovery: "polonium",
          awards: ["Nobel Prize in Physics", "Nobel Prize in Chemistry"],
        }}
      />
      <Profile
        person={{
          imageId: "e3vJ8nV",
          fullName: "Albert Einstein",
          workStuff: "physicist",
          discovery: "theory of relativity",
          awards: ["Nobel Prize in Physics"],
        }}
      />
      <Profile
        person={{
          imageId: "YfeOqp2",
          fullName: "Kat Saruhasi",
          workStuff: "geophysicist",
          discovery: "measuring c02 in water",
          awards: ["miyake prize"],
        }}
      />
    </div>
  );
}
