import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
("");

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  // function handleClick(i) {
  //   const nextSquares = squares.slice();
  //   if (xIsNext) {
  //     nextSquares[i] = "✖️";
  //   } else {
  //     nextSquares[i] = "⭕️";
  //   }
  //   setSquares(nextSquares);
  //   setXIsNext(!xIsNext);
  // }
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // Find the first matching winning condition
    const winningLine = lines.find(
      ([a, b, c]) =>
        squares[a] && squares[a] === squares[b] && squares[a] === squares[c]
    );

    // Return the winning symbol or null if no match
    return winningLine ? squares[winningLine[0]] : null;
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();

    // Using ternary to decide the symbol
    nextSquares[i] = xIsNext ? "✖️" : "⭕️";

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  const winner = calculateWinner(squares);
  let status;
  status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <>
      <div className="status">{status}</div>

      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
