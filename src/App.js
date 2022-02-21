import "./styles.css";
import React from "react";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [bg, setbg] = useState("transparent");
  const [color, setcolor] = useState(false);
  const handleincrease = () => {
    setCounter(counter + 1);
  };
  const handledecrease = () => {
    if (counter < 1) {
      return;
    } else {
      setCounter(counter - 1);
    }
  };
  const handleToggle = () => {
    if (color === false) {
      setbg("red");
      setcolor(true);
    } else {
      setbg("transparent");
      setcolor(false);
    }
  };

  return (
    <div className="App">
      <button onClick={handleincrease}>increase</button>
      <button onClick={handledecrease}>Decrease</button>
      <div>{counter} </div>
      <div style={{ backgroundColor: bg }}>
        {" "}
        <p> hey how are you</p>{" "}
      </div>
      <button onClick={handleToggle}>Toggle button</button>
    </div>
  );
}
