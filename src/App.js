import React, { Component } from 'react';
import './App.css';

import Title from './components/title';
import Items from './components/items';
import Checkout from './components/checkout';
import Contact from './components/contact';

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <Items />
        <Contact />
        <Checkout />
      </div>
    );
  }
}

export default App;
