import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <div>
        <h1>Your Shopping Cart</h1>
        <p>If the cart is empty then we shall again add back the products for you</p>
      </div>
    )
  }
}


export default Header;