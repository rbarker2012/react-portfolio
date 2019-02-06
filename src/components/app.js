import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Randy Barker's Portfolio</h1>
        <div>
          <h1>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </h1>
        </div>
      </div>
    );
  }
}
