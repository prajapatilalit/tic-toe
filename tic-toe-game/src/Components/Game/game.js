import React, { useState } from "react";
import { CalculateWinner } from "../../gameLogic";
import Board from "../Board/board";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xNext, setXNext] = useState(true);
  const winner = CalculateWinner(board);

  const handleClick = () => {};

  const nextTo = () => {};

  const renderMoves = () => {};

  return <Board squares={board} onClick={handleClick} />;
};

export default Game;
