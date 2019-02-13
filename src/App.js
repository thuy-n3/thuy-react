import React, { Component } from 'react';
import Header from './components/header.js';


class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>This is from app.js</h1>

      <Header />
      <Resume />

      </div>
    );
  }
}

export default App;


//<img src={logo} className="App-logo" alt="logo" />