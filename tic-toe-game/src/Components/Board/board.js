import React from "react";
import Square from "../Square/square";

const style = {
  border: "5px solid darkblue",
  borderRadius: "10px",
  width: "300px",
  height: "300px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr)/repeat(3, 1fr)",
};

const Board = ({ squares, onClick }) => {
  return (
    <div style={style}>
      <Square value="1" onClick={() => onClick("dummy value")} />
      <Square value="2" onClick={() => onClick("dummy value")} />
      <Square value="3" onClick={() => onClick("dummy value")} />
      <Square value="4" onClick={() => onClick("dummy value")} />
      <Square value="5" onClick={() => onClick("dummy value")} />
      <Square value="6" onClick={() => onClick("dummy value")} />
      <Square value="7" onClick={() => onClick("dummy value")} />
      <Square value="8" onClick={() => onClick("dummy value")} />
      <Square value="9" onClick={() => onClick("dummy value")} />
    </div>
  );
};

export default Board;
