import React, { Component } from 'react';

class Resource extends Component {
  render() {
    return (
      <div className='Resource'>
          <h2>Resource page</h2>
          <ul>
            <li><a href='/#/'>Home</a></li>
            <li>resource</li>
            <li><a href='/#/practice'>practice</a></li>
            <li><a href='/#/related'>related</a></li>
          </ul>
      </div>
    );
  }
}

export default Resource;
