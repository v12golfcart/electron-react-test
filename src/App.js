import logo from './logo.svg';
import './App.css';

const remote = window.require('@electron/remote')
const { BrowserWindow } = remote

function App() {
  const handleButtonClick = () => {
    let win = new BrowserWindow()
    win.loadURL('https://www.electronjs.org/docs/api/remote')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <button onClick={handleButtonClick}>test</button>
      </header>
    </div>
  );
}

export default App;
