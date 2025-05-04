import "./App.css"; // Ensure this file exists and is correctly linked

const user = {
  fullName: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

export default function HedyLamarr() {
  return (
    <div className="App">
      <h1>{user.fullName}</h1>
      <img
        className="hedy"
        src={user.imageUrl}
        alt={user.fullName}
        style={{ width: user.imageSize, height: user.imageSize }}
      />
      <p>Hedy Lamarr was an actress and inventor.</p>
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </div>
  );
}
