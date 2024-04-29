import React, { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [displayValue, setDisplayValue] = useState("");
  const [currentValue, setCurrentValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  const handleNumberClick = (number) => {
    setDisplayValue(displayValue + number);
  };

  const handleOperatorClick = (op) => {
    if (currentValue !== null) {
      calculate();
    }
    setCurrentValue(parseFloat(displayValue));
    setOperator(op);
    setDisplayValue("");
  };

  const calculate = () => {
    let result;
    const currentValueFloat = parseFloat(displayValue);

    switch (operator) {
      case "+":
        result = currentValue + currentValueFloat;
        break;
      case "-":
        result = currentValue - currentValueFloat;
        break;
      case "*":
        result = currentValue * currentValueFloat;
        break;
      case "/":
        result = currentValue / currentValueFloat;
        break;
      default:
        return;
    }

    setDisplayValue(result.toString());
    setCurrentValue(result);
    setPreviousValue(result);
  };

  const handleEqualsClick = () => {
    if (currentValue !== null) {
      calculate();
      setPreviousValue(null);
      setOperator(null);
      setCurrentValue(null); // Reset current value after calculation
    }
  };

  const handleClear = () => {
    setDisplayValue("");
    setCurrentValue(null);
    setOperator(null);
    setPreviousValue(null);
  };

  return (
    <div className={styles.calculatorContainer}>
      <div className="calculator">
        <h1 className="title" style={{ textAlign: "center" }}>
          Calculator
        </h1>
        <input type="text" value={displayValue} readOnly />
        <div className="buttons">
          <div className="row">
            <button onClick={() => handleNumberClick("7")}>7</button>
            <button onClick={() => handleNumberClick("8")}>8</button>
            <button onClick={() => handleNumberClick("9")}>9</button>
            <button onClick={() => handleOperatorClick("/")}>/</button>
          </div>
          <div className="row">
            <button onClick={() => handleNumberClick("4")}>4</button>
            <button onClick={() => handleNumberClick("5")}>5</button>
            <button onClick={() => handleNumberClick("6")}>6</button>
            <button onClick={() => handleOperatorClick("*")}>*</button>
          </div>
          <div className="row">
            <button onClick={() => handleNumberClick("1")}>1</button>
            <button onClick={() => handleNumberClick("2")}>2</button>
            <button onClick={() => handleNumberClick("3")}>3</button>
            <button onClick={() => handleOperatorClick("-")}>-</button>
          </div>
          <div className="row">
            <button onClick={() => handleNumberClick("0")}>0</button>
            <button onClick={handleClear}>C</button>
            <button onClick={handleEqualsClick}>=</button>
            <button onClick={() => handleOperatorClick("+")}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
