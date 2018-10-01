import React, { Component } from 'react';
import Ninjas from './Ninjas';
import './App.css';

class App extends Component {
  render(){
    return(
      <div className="App">
        <h1>First React App!</h1>
        <Ninjas />
      </div>
    );
  }
}

export default App;
