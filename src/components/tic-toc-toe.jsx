import { useState } from "react";

function Square({ value ,onsquareClick}) {
  return (
    <button
      className="w-16 h-16 bg-gray-200 border border-black text-xl font-bold hover:bg-purple-300"
      onClick = {onsquareClick}
    >
      {value}
    </button>
  );
}

export default function TicTacToe() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    if (squares[i]) {
        return;
    }
    if (xIsNext) {
        nextSquares[i] = "X";
      } else {
        nextSquares[i] = "O";
      }
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
    }
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="inline-grid grid-cols-3 border border-black bg-white">
        <Square value={squares[0]} onsquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onsquareClick={() => handleClick(1)} />
        <Square value={squares[2]}  onsquareClick={() => handleClick(2)}/>
        <Square value={squares[3]} onsquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onsquareClick={() => handleClick(4)} />   
        <Square value={squares[5]} onsquareClick={() => handleClick(5)}/>
        <Square value={squares[6]} onsquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onsquareClick={() => handleClick(7)}/>
        <Square value={squares[8]}  onsquareClick={() => handleClick(8)}/>
      </div>
    </div>
  );
}
