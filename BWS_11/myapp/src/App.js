import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Item from "./MyItem";

class StarWars extends React.Component {

  constructor(props){
    super(props)
    this.state={
      name: null,
      height: null,
      homeworld: null,
      films: []
    }
  }

  getNewCharacter() {
    console.log("get noew character");
    this.setState({
      name: 'Luke',
      height: 172,
      homeworld: 'Tatooine',
      films: ['Item1', 'Item2']
    })
  }



  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p>{this.state.height}</p>
        <p>Homeworld: {this.state.homeworld}</p>
        <ul>
          <li>{this.state.films}</li>
        </ul>
        <button
          type="button"
          onClick={() => this.getNewCharacter()}
          className="btn"
        >
          Click Me
        </button>
      </div>
    );
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;
