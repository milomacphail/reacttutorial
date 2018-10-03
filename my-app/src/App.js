import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
    state = {
        ninjas: [
          
          { name: "Ryu", age: 30, belt: "green", id: 1 },
          { name: "Jackie", age: 55, belt: "dark black", id: 2 },
          { name: "Oscar", age: 17, belt: "blue", id: 3 },
          { name: "Yoshi", age: 27, belt: "purp", id: 4 }
          ]
    }
  render(){
    return(
      <div className="App">
        <h1>First React App!</h1>
        <Ninjas ninjas = { this.state.ninjas } />
        <AddNinja />
      </div>
    );
  }
}

export default App;
