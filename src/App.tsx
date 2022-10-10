import logo from './logo.svg';
import './App.css';
import * as styles from './styles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Build Test <br /> MODE: {process.env.REACT_APP_MODE} <br />
          API_URL: {process.env.REACT_APP_API_URL}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div css={styles.text}>Text Styling</div>
      </header>
    </div>
  );
}

export default App;
