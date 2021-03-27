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
    const boardCopy = [...board];

    if (winner || boardCopy[i]) return;

    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
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
        <h3>
          {winner
            ? "Winner: " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </h3>
        {renderMoves()}
      </div>
    </>
  );
};

export default Game;
