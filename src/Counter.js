import { useState } from "react";
const Counter = ({ numInicial }) => {
  const [num, setNum] = useState(numInicial);
  return (
    <div className="counter-container">
      <div className="number">{num}</div>
      <div className="first-buttons">
        <button
          className="increase-button"
          onClick={() => {
            setNum(num + 1);
          }}
        >
          +
        </button>
        <button
          className="decrease-button"
          onClick={() => {
            setNum(num - 1);
          }}
        >
          -
        </button>
      </div>

      <button
        className="reset-button"
        onClick={() => {
          setNum(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
