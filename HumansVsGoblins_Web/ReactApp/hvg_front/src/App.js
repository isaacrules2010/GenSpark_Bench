import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
//import Test from './Components/JSTest';
import ScoreDisplay from './Components/Scores';
import Game from './Components/Game';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='HvM' Component={Game} />
          <Route path='scores' Component={ScoreDisplay} />
        </Routes>
      </Router>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This will eventually be the "Home" page. :)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
