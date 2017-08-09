import React, { Component } from 'react';

class Related extends Component {
  render() {
    return (
      <div className='Related'>
          <h2>Related page</h2>
          <ul>
            <li><a href='/#/'>Home</a></li>
            <li><a href='/#/resource'>resource</a></li>
            <li><a href='/#/practice'>practice</a></li>
            <li>related</li>
          </ul>
      </div>
    );
  }
}

export default Related;
