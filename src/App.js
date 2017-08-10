import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='App container'>
          <h2>Home page</h2>
          <ul>
            <li>Home</li>
            <li><a href='/#/resource'>resource</a></li>
            <li><a href='/#/practice'>practice</a></li>
            <li><a href='/#/related'>related</a></li>
          </ul>
      </div>
    );
  }
}

export default App;
