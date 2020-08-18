import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyNumbers from './MyNumbers';
import GameRules from './GameRules';
import generateNumsForGame from './GenerateNumsForGame';
import PlayThese from './PlayThese';

class App extends React.Component {
  state = {
    currentNumber: null,
    myNumbers: [],
    generatedNums: [],
    Currentlyplaying: '',
    isLucky: false,
    maxNumbersLength: null,
    numbersCeiling: null,
    numbersFloor: null,
    megaCeiling: null,
    FIVECARDCASH: false,
    FASTPLAY: false
  }

  handleSelectGame(currentGame) {

    const game = currentGame;
    this.handleIntegerCount(game);
    this.setState({ Currentlyplaying: game })
  }

  handleGetLucky() {
    console.log(`Prepare to get lucky`);
    const { numbersFloor, numbersCeiling, maxNumbersLength } = this.state
    let luckyNums = generateNumsForGame(numbersFloor, numbersCeiling, maxNumbersLength);
    this.setState({ generatedNums: luckyNums })
    console.log(this.state.generatedNums);
    this.setState({ isLucky: true })
    // this.setState({ generatedNums: [] })
  }

  handleAddNumber(e) {

    console.log(`adding ${e} to your numbers`);
    const { myNumbers, maxNumbersLength } = this.state;
    const newNumsLength = maxNumbersLength - myNumbers.length;
    if (e) {
      if (this.state.myNumbers.includes(e)) {
        alert('Can not add duplicate numbers!')
      }
      else {
        this.setState({ myNumbers: [...this.state.myNumbers, e] })
        this.setState({ maxNumbersLength: newNumsLength })
        document.getElementById('luckyinput').value = null
        // e.currentTarget.value(null);
      }
    } else { alert('Can not add an empty number!') }

  }

  handleCurrentNumber(number) {
    console.log(number);
    this.setState({ currentNumber: number })
  }


  handleIntegerCount(game) {
    //const { Currentlyplaying } = this.state.Currentlyplaying;
    switch (game) {
      case "Pick 3":
        this.setState({ maxNumbersLength: 3 })
        this.setState({ numbersCeiling: 9 })
        this.setState({ numbersFloor: 0 })
        break;
      case "Pick 4":
        this.setState({ maxNumbersLength: 4 })
        this.setState({ numbersCeiling: 9 })
        this.setState({ numbersFloor: 0 })
        break;
      case "Jersey Cash 5":
        this.setState({ maxNumbersLength: 5 })
        this.setState({ numbersCeiling: 45 })
        this.setState({ numbersFloor: 1 })
        break;
      case "Pick 6":
        this.setState({ maxNumbersLength: 6 })
        this.setState({ numbersCeiling: 49 })
        this.setState({ numbersFloor: 1 })
        break;
      case "Quick Draw":
        this.setState({ maxNumbersLength: 10 })
        this.setState({ numbersCeiling: 80 })
        this.setState({ numbersFloor: 1 })
        break;
      case "CASH POP":
        this.setState({ maxNumbersLength: 1 })
        this.setState({ numbersCeiling: 15 })
        this.setState({ numbersFloor: 1 })
        break;
      case "Powerball":
        this.setState({ maxNumbersLength: 5 })
        this.setState({ numbersCeiling: 69 })
        this.setState({ numbersFloor: 1 })
        this.setState({ megaCeiling: 26 })
        break;
      case "Mega Millions":
        this.setState({ maxNumbersLength: 5 })
        this.setState({ numbersCeiling: 70 })
        this.setState({ numbersFloor: 1 })
        this.setState({ megaCeiling: 25 })
        break;
      case "CASH4LIFE":
        this.setState({ maxNumbersLength: 5 })
        this.setState({ numbersCeiling: 60 })
        this.setState({ numbersFloor: 1 })
        this.setState({ megaCeiling: 4 })
        break;
      case "5 Card Cash":
        this.setState({ FIVECARDCASH: true })
        break;
      case "FAST PLAY":
        this.setState({ FASTPLAY: true })

        break;
      default:
        console.log('waiting....');

    }
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
          <input name="integer" id='luckyinput' type="number" onChange={(e) => this.handleCurrentNumber(e.currentTarget.value)} />
          <button type="submit" onClick={(e) => { this.handleAddNumber(this.state.currentNumber) }}>Add to My Numbers</button>
          {this.state.myNumbers.length > 0 && <div><h2>My Lucky Numbers</h2><ul><MyNumbers numbers={this.state.myNumbers} /></ul></div>}
          {this.state.myNumbers.length > 0 && <button type="submit" onClick={() => this.handleGetLucky()}>Get Lucky</button>}
          {this.state.Currentlyplaying.length > 1 && <h3>Currently Playing: {this.state.Currentlyplaying}</h3>}
          {this.state.isLucky === true && <div><h2>Play these:</h2><ul><PlayThese numbers={this.state.generatedNums} /></ul></div>}
          <GameRules thisgame={this.state.Currentlyplaying} />
          <select onChange={(e) => this.handleSelectGame(e.currentTarget.value)} >
            <option value="default">Select</option>
            <option value="Pick 3">Pick 3</option>
            <option value="Pick 4">Pick 4</option>
            <option value="Jersey Cash 5">Jersey Cash 5</option>
            <option value="Pick 6">Pick 6</option>
            <option value="Quick Draw">Quick Draw</option>
            <option value="CASH POP">CASH POP</option>
            <option value="Powerball">Powerball</option>
            <option value="Mega Millions">Mega Millions</option>
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
