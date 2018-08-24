import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import ItemList from './components/itemlist';
import Checkout from './components/checkout';
import Contact from './components/contact';
import RemoveButton from './components/removeButton';

class App extends Component {
  constructor() {
    super();
}

  render() {
  const image1 = "https://res.cloudinary.com/jkarlin929/image/upload/v1535142579/blueshirt1_sagdj6.jpg";
  const image2 = "https://res.cloudinary.com/jkarlin929/image/upload/v1535142864/blueshirt2_pihsiu.jpg";
  const image3 = "https://res.cloudinary.com/jkarlin929/image/upload/v1535142874/pinkshirt_caoznb.jpg";
  const image4 = "https://res.cloudinary.com/jkarlin929/image/upload/v1535142877/redshirt_xkqjyl.jpg";

  const cartItems =
[
  {
    id: 1,
    image: image1,
    description: 'Cotton Tshirt',
    style: 'MS13KT1906',
    color: 'blue',
    size: 'S',
    price: 11.00,
    button: <RemoveButton />
  },
  {
    image: image3,
    description: 'Print Girls Tee',
    style: 'MS13KT1906',
    color: 'pink',
    size: 'S',
    price: 17.00,
    button: <RemoveButton />
  },
  {
    image: image2,
    description: 'Flower Pattern Shirt',
    style: 'MS13KT1906',
    color: 'blue',
    size: 'S',
    price: 9.00,
    button: <RemoveButton />
  },
  {
    image: image4,
    description: 'Check Pattern Shirt',
    style: 'MS13KT1906',
    color: 'red',
    size: 'M',
    price: 22.00,
    button: <RemoveButton />
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
              <li>
                {item.button}
              </li>
            </ul>
          )} />
        <RemoveButton />
        <Contact />
        <Checkout />
      </div>
    );
  }
}

export default App;
