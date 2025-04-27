import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const handleButton = (val) => {
    setInput(input + val);
  };
  const handleEquals = () => {
    try {
      setOutput(eval(input));
    } catch (err) {
      setOutput("Error");
    }
  };
  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };
  const handleClear = () => {
    setInput("");
    setOutput("");
  };
  return (
    <div className="calculator">
      <div className="display">
        <input
          type="text"
          className="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="output"> {output}</div>
      </div>
      <div className="buttons">
        <button className="button" onClick={() => handleButton("1")}>
          1
        </button>
        <button className="button" onClick={() => handleButton("2")}>
          2
        </button>
        <button className="button" onClick={() => handleButton("3")}>
          3
        </button>
        <button className="button" onClick={() => handleButton("+")}>
          +
        </button>
        <button className="button" onClick={() => handleButton("4")}>
          4
        </button>
        <button className="button" onClick={() => handleButton("5")}>
          5
        </button>
        <button className="button" onClick={() => handleButton("6")}>
          6
        </button>
        <button className="button" onClick={() => handleButton("-")}>
          -
        </button>
        <button className="button" onClick={() => handleButton("7")}>
          7
        </button>
        <button className="button" onClick={() => handleButton("8")}>
          8
        </button>
        <button className="button" onClick={() => handleButton("9")}>
          9
        </button>
        <button className="button" onClick={() => handleButton("*")}>
          *
        </button>
        <button className="button" onClick={() => handleButton("0")}>
          0
        </button>
        <button className="button" onClick={handleEquals}>
          =
        </button>
        <button className="button" onClick={() => handleButton(".")}>
          .
        </button>
        <button className="button" onClick={() => handleButton("/")}>
          /
        </button>

        <button className="button" onClick={handleClear}>
          C
        </button>
        <button className="button" onClick={handleBackspace}>
          ←
        </button>
      </div>
    </div>
  );
};
export default Calculator;
