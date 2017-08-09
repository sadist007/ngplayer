import React, { Component } from 'react';

class Practice extends Component {
  render() {
    return (
      <div className='Practice'>
          <h2>Practice page</h2>
          <ul>
            <li><a href='/#/'>Home</a></li>
            <li><a href='/#/resource'>resource</a></li>
            <li>practice</li>
            <li><a href='/#/related'>related</a></li>
          </ul>
      </div>
    );
  }
}

export default Practice;
