import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BasicApp from './components/BasicApp'
import Student from './jsons/Student.json'
class App extends Component {
  render() {
    return (
      <div className="App">
        <BasicApp data={Student}/>
      </div>
    );
  }
}

export default App;
