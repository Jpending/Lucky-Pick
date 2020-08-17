import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Lucky Pick</h1>
      </header>
      <body>
        <label for="integer">Put  a number you want to use here</label>
        <input name="integer" type="number" />
        <button type="submit">Add to My Numbers</button>
        <h2>My Numbers</h2>
        <ul>
          <li>My number</li>
          <li>Random 1</li>
          <li>Random 2</li>
          <li>Random 3</li>
          <li>Random 4</li>
          <li>Random 5</li>
        </ul>

        <h3>Currently Playing:</h3>
        <select>
          <option>Pick 3</option>
          <option>Pick 4</option>
          <option>Jersey Cash 5</option>
          <option>Pick 6</option>
          <option>Quick Draw</option>
          <option>CASH POP</option>
          <option>Powerball</option>
          <option>Mega Millions</option>
          <option>CASH4LIFE</option>
          <option>5 Card Cash</option>
          <option>FAST PLAY</option>
        </select>
      </body>
    </div>
  );
}

export default App;
