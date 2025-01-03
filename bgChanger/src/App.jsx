import "./App.css";
import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  return (
    <>
      <div
        className="w-full h-screen flex justify-center items-center font-mono text-3xl duration-200"
        style={{ backgroundColor: color }}
      >
        <h1 className="text-white font-bold">Background</h1>
        <div className="fixed bg-white min-h-14 w-3/5 max-w-3xl rounded-3xl bottom-12 text-black text-lg flex justify-around items-center">
          <button
            className="outline-none min-h-10 min-w-24 bg-green-600 rounded-3xl align-center"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none min-h-10 min-w-24 bg-blue-600 rounded-3xl text-center"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none min-h-10 min-w-24 bg-red-600 rounded-3xl text-center"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none min-h-10 min-w-24 bg-yellow-400 rounded-3xl text-center"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="outline-none min-h-10 min-w-24 bg-cyan-400 rounded-3xl text-center"
            onClick={() => setColor("cyan")}
          >
            Cyan
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
