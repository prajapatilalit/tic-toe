import React, { useState } from "react";
import { CalculateWinner } from "../../gameLogic";
import Board from "../Board/board";

const styles = {
  width: "200px",
  margin: "20px auto",
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = CalculateWinner(board);

  const handleClick = (i) => {
    const newBoard = [...board];

    if (winner || newBoard[i]) return;

    newBoard[i] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXisNext(!xIsNext);
  };

  const nextTo = () => {};

  const renderMoves = () => (
    <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
  );

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div style={styles}>
        <p>
          {winner
            ? "Winner: " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </p>
        {renderMoves()}
      </div>
    </>
  );
};

export default Game;
