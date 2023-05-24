import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState({});

  useEffect(() => {
    (async function () {
      let chrome = window.versions.chrome();
      let node = window.versions.node();
      let electron = window.versions.electron();

      setText({ chrome, node, electron });
    })();
  }, []);

  return (
    <>
      <div>
        <a href="https://electronjs.org" target="_blank">
          <img
            src="https://www.electronjs.org/assets/img/logo.svg"
            className="logo"
            alt="Electron logo"
          />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Electron + Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> for react code and
          <code>./electron.cjs</code> for electron code
        </p>
      </div>
      <p className="versions">
        This app is using Chrome (v{text?.chrome}), Node.js (v{text?.node}), and
        Electron (v{text?.electron})
      </p>
    </>
  );
}

export default App;
