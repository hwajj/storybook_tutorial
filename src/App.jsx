import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Task from "./components/Task";

function App() {
  const [count, setCount] = useState(0);
  const task = {
    id: count,
    title: `Task 1`,
    completed: false,
  };

  const onAchieveTask = (id) => {
    console.log(id);
    console.log(`Task ${count} achieved!`);
  };
  const onPinTask = () => {
    console.log(`Task ${count} deleted!`);
  };
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Task task onArchiveTask={onAchieveTask} onPinTask={onPinTask} />
    </div>
  );
}

export default App;
