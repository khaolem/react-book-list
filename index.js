import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Book from './Book'
import FormBook from './FormBook'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
      <Book/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

// ImageURL
// title
// author
// description