import React, { useState, useMemo, useCallback } from "react";

// 1. Wrap Square with React.memo to prevent unnecessary re-renders.
// It will only re-render if its props change.
const Square = React.memo(function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
});

function Board({ xIsNext, squares, onPlay }) {
  // 2. Memoize the winner calculation so it only updates when squares change.
  const winner = useMemo(() => calculateWinner(squares), [squares]);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  // 3. Memoize the handleClick function using useCallback.
  // This prevents recreating the function on every render.
  const handleClick = useCallback(
    (i) => {
      if (winner || squares[i]) return;
      const nextSquares = squares.slice();
      nextSquares[i] = xIsNext ? "✖️" : "⭕";
      onPlay(nextSquares);
    },
    [winner, squares, xIsNext, onPlay]
  );

  // 4. Dynamically generate board rows.
  const renderSquare = (i) => (
    <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />
  );

  return (
    <>
      <div className="status">{status}</div>
      {[0, 1, 2].map((row) => (
        <div key={row} className="board-row">
          {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
        </div>
      ))}
    </>
  );
}

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  // 5. Use useCallback to memoize handlePlay and jumpTo.
  const handlePlay = useCallback(
    (nextSquares) => {
      const nextHistory = history
        .slice(0, currentMove + 1)
        .concat([nextSquares]);
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
      // Using functional update for state changes that depend on previous state.
      setXIsNext((prevXIsNext) => !prevXIsNext);
    },
    [history, currentMove]
  );

  const jumpTo = useCallback((nextMove) => {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }, []);

  // 6. Memoize the moves list to avoid recalculating on every render.
  const moves = useMemo(
    () =>
      history.map((squares, move) => {
        const description =
          move > 0 ? `Go to move #${move}` : "Go to game start";
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
          </li>
        );
      }),
    [history, jumpTo]
  );

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

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
  const winningLine = lines.find(
    ([a, b, c]) =>
      squares[a] && squares[a] === squares[b] && squares[a] === squares[c]
  );
  return winningLine ? squares[winningLine[0]] : null;
}
