import React, { Component } from 'react';
import AddImage from './Components/AddImage';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
      todos:[]
    }
  }

  render() {
    return (
      <div className="App">
        <AddImage/>
      </div>
    );
  }
}

export default App;
