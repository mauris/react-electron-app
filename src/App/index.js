import React, { Component } from 'react';
import logo from '../logo.svg';
import './index.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.title = 'Welcome to react-electron-app boilerplate.';
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.title}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
