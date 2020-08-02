import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <h1 id="header">Filter Pokemon by Gender</h1>
        <h2 id="sub-header">Which Pokemon will win the battle?</h2>
        <form>
          <input
            id="search"
            placeholder="genderless, male or female"
          />
          <button id="find">Find</button>
        </form>
      </div>
    );
  }
}

export default App;