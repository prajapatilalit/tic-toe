import React from "react";

const style = {
  backgroundColor: "lightblue",
  border: "2px solid darkblue",
  fontSize: "40px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};
const Square = ({ value, onClick }) => {
  return (
    <button style={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
