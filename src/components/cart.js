import React, {Component} from 'react';
import CartRow from './cart-row';

class Cart extends Component {
    state = {
    inCart: [
    {
    id: 1,
    image: "https://res.cloudinary.com/jkarlin929/image/upload/v1535142579/blueshirt1_sagdj6.jpg",
    description: 'Cotton Tshirt',
    style: 'MS13KT1906',
    color: 'blue',
    size: 'S',
    price: 11.00
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/jkarlin929/image/upload/v1535142874/pinkshirt_caoznb.jpg",
    description: 'Print Girls Tee',
    style: 'MS13KT1906',
    color: 'pink',
    size: 'S',
    price: 17.00
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/jkarlin929/image/upload/v1535142864/blueshirt2_pihsiu.jpg",
    description: 'Flower Pattern Shirt',
    style: 'MS13KT1906',
    color: 'blue',
    size: 'S',
    price: 9.00
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/jkarlin929/image/upload/v1535142877/redshirt_xkqjyl.jpg",
    description: 'Check Pattern Shirt',
    style: 'MS13KT1906',
    color: 'red',
    size: 'M',
    price: 22.00
      }
    ]
  };

  removeCallback = (removedProduct) => {
    this.setState(state => ({
      inCart: state.inCart.filter(product => product.id !== removedProduct.id)
    }));
  };

  render() {
    const { inCart } = this.state;
    console.log({inCart})

    if (!inCart.length) {
      return(
        <p>Cart is empty </p>
      );
    }

    return(
      <div>
        {inCart.map(product => (
          <CartRow
          key={product.id}
          product={product}
          removeCallback={this.removeCallback}
          />
          ))}
      </div>
    )
  }
}

export default Cart;