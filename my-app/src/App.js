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
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
      })
  
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    }) 
  }
  componentDidMount(){
    console.log("Component mounted");
  }
  componentDidUpdate(prevProps, prevState){
    console.log("Component updated");
    console.log(prevProps);
  }
  render(){
    return(
      <div className="App">
        <h1>First React App!</h1>
        <Ninjas deleteNinja = { this.deleteNinja } ninjas={ this.state.ninjas } />
        <AddNinja addNinja = { this.addNinja } />
      </div>
    );
  }
}

export default App;
