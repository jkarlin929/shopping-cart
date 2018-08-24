import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import ItemList from './components/itemlist';
import Checkout from './components/checkout';
import Contact from './components/contact';

class App extends Component {
  constructor() {
    super();
}

  render() {
  const cartItems =
[
  {
    image: './images/blueshirt1.jpeg',
    description: 'Cotton Tshirt',
    style: 'MS13KT1906',
    color: 'blue',
    size: 'S',
    price: 11.00
  },
  {
    description: 'Print Girls Tee',
    style: 'MS13KT1906',
    color: 'pink',
    size: 'S',
    price: 17.00
  },
  {
    description: 'Flower Pattern Shirt',
    style: 'MS13KT1906',
    color: 'blue',
    size: 'S',
    price: 9.00
  },
  {
    description: 'Check Pattern Shirt',
    style: 'MS13KT1906',
    color: 'red',
    size: 'M',
    price: 22.00
  }
];

    return (
      <div>
        <Header />
        <ItemList
        cartItemsLength={cartItems.length}
        cartItems={cartItems.map((item, i) =>
            <ul key={i}>
              <li>
                <img src={item.image} />
              </li>
              <li>
                Description: {item.description}
              </li>
              <li>
                Color: {item.color}
              </li>
              <li>
                Size: {item.size}
              </li>
              <li>
                Price: {item.price}
              </li>
            </ul>
          )} />
        <Contact />
        <Checkout />
      </div>
    );
  }
}

export default App;
