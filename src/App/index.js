import React, { Component } from 'react';
import logo from '../logo.svg';
import './index.scss';

const { shell } = window.require('electron');

export default class App extends Component {
  static renderBrowserOpenHandler() {
    return (event) => {
      const { target } = event;
      const url = target.attributes.href.value;
      shell.openExternal(url);
      event.preventDefault();
    };
  }

  constructor(props) {
    super(props);
    this.title = 'Welcome to react-electron-app boilerplate.';

    this.links = [
      {
        url: 'https://reactjs.org/',
        caption: 'Learn React',
      },
      {
        url: 'https://electronjs.org/',
        caption: 'Learn Electron',
      },
      {
        url: 'https://github.com/mauris/react-electron-app',
        caption: 'react-electron-app boilerplate',
      },
    ];
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.title}
          </p>
          {this.links.map(entry => (
            <a
              className="App-link"
              href={entry.url}
              onClick={this.renderBrowserOpenHandler()}
            >
              {entry.caption}
            </a>
          ))}
        </header>
      </div>
    );
  }
}
