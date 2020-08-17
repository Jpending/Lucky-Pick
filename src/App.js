import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyNumbers from './MyNumbers';

class App extends React.Component {
  state = {
    currentNumber: null,
    myNumbers: [],
    generatedNums: [],
    Currentlyplaying: '',
    isLucky: false
  }

  handleSelectGame(currentGame) {
    console.log(currentGame);
    const game = currentGame;
    this.setState({ Currentlyplaying: game })
  }

  handleGetLucky() {
    console.log(`Prepare to get lucky`);
    this.setState({ isLucky: !this.state.isLucky })
  }

  handleAddNumber(number) {
    console.log(`adding ${number} to your numbers`);
    if (number) {
      if (this.state.myNumbers.includes(number)) {
        alert('Can not add duplicate numbers!')
      }
      else { this.setState({ myNumbers: [...this.state.myNumbers, number] }) }
    } else { alert('Can not add an empty number!') }
  }

  handleCurrentNumber(number) {
    console.log(number);
    this.setState({ currentNumber: number })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Lucky Pick</h1>
        </header>
        <div>
          <label >Put  a number you want to use here</label>
          <input name="integer" type="number" onChange={(e) => this.handleCurrentNumber(e.currentTarget.value)} />
          <button type="submit" onClick={() => { this.handleAddNumber(this.state.currentNumber) }}>Add to My Numbers</button>
          {this.state.myNumbers.length > 0 && <button type="submit" onClick={() => this.handleGetLucky()}>Get Lucky</button>}
          {this.state.isLucky === true && <div><h2>My Lucky Numbers</h2><ul><MyNumbers numbers={this.state.myNumbers} /></ul></div>}


          <h3>Currently Playing: {this.state.Currentlyplaying}</h3>
          <select onChange={(e) => this.handleSelectGame(e.currentTarget.value)} >
            <option value="">Select</option>
            <option value="Pick 3">Pick 3</option>
            <option value="Pick 4">Pick 4</option>
            <option value="Jersey Cash 5">Jersey Cash 5</option>
            <option value="Pick 6">Pick 6</option>
            <option value="Quick Draw">Quick Draw</option>
            <option value="CASH POP">CASH POP</option>
            <option value="Powerball">Powerball</option>
            <option value="Mega Million">Mega Millions</option>
            <option value="CASH4LIFE">CASH4LIFE</option>
            <option value="5 Card Cash">5 Card Cash</option>
            <option value="FAST PLAY">FAST PLAY</option>
          </select>
        </div>
      </div >
    );
  }
}

export default App;
