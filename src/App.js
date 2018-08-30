import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import ItemList from './components/itemlist';
import Checkout from './components/checkout';
import Contact from './components/contact';
import RemoveButton from './components/remove-button';
import Cart from './components/cart';
import CartRow from './components/cart-row';

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <CartRow />
        <ItemList />
        <Contact />
        <Checkout />
      </div>
    );
  }
}

export default App;
