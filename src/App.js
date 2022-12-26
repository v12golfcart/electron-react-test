import logo from './logo.svg';
import './App.css';

const isElectron = () => {
  // https://github.com/electron/electron/issues/2288#issuecomment-337858978
  const userAgent = navigator.userAgent.toLowerCase();
  return userAgent.indexOf(' electron/') > -1
}
console.log('Is electron?', isElectron())

let remote, BrowserWindow;
if (isElectron()) {
  remote = window.require('@electron/remote')
  BrowserWindow = remote.BrowserWindow
}

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
      {isElectron() && <button onClick={handleButtonClick}>test</button>}
      </header>
    </div>
  );
}

export default App;
