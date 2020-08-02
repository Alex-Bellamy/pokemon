import React, { Component } from "react";

class App extends Component {
state = {
  searchTerm: [],
}

onChange = (e) => {
  this.setState({ searchTerm: e.target.value });
  }

  render() {
    return (
      <div>
        <h1 id="header">Filter Pokemon by Gender</h1>
        <h2 id="sub-header">Which Pokemon will win the battle?</h2>
        <form>
          <input
            id="search"
            placeholder="genderless, male or female" value={this.state.searchTerm} onChange={this.onChange}
          />
          <button id="find">Find</button>
        </form>
      </div>
    );
  }
}

export default App;