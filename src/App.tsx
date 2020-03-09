import React from "react";
import "./App.css";
import { doCommand } from "./doCommand";

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          console.log(doCommand({ type: "ADD", args: [1, 2] }));
        }}
      >
        doAdd
      </button>
      <input type="text" placeholder="to see UI smoothness" />
    </div>
  );
}

export default App;
