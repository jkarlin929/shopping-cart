import React, { Component } from 'react';
import RemoveButton from './remove-button';


class CartRow extends React.Component {

  removeOnClick = (removedProduct) =>
  this.props.removeCallback(this.props.product);

  render() {
    const { product, removeCallback } = this.props;

    return(
      <div>
        <p>product.description</p>
        <p>product.price</p>
        <p>
        <RemoveButton onClick={this.removeOnClick} />
        </p>
      </div>
    )
  }
}

export default CartRow;