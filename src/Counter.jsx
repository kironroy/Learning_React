import { useState } from "react";
import "./App.css"; // Ensure this file exists and is correctly linked

// export default function Counter() {
//   return (
//     <div>
//       <h1>Counters that update separately</h1>
//       <MyButton />
//       <MyButton />
//     </div>
//   );
// }

// function MyButton() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return <button className="yellowBtn" onClick={handleClick}>Clicked {count} times</button>;
// }

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );

  function MyButton({ count, onClick }) {
    return (
      <button className="yellowBtn" onClick={onClick}>
        Clicked {count} times
      </button>
    );
  }
}
