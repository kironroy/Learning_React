import "./App.css";

function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaGathering() {
  const cups = Array.from({ length: 12 }, (_, i) => (
    <Cup key={i + 1} guest={i + 1} />
  ));
  return cups;
}
