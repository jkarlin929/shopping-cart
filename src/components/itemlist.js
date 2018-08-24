import React, { Component } from 'react';

class ItemList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <span>
          <p>{this.props.cartItemsLength} ITEMS</p>
          <p>SIZE</p>
          <p>QTY</p>
          <p>PRICE</p>
        </span>
        <div>
          {this.props.cartItems}
        </div>
      </div>
    )
  }
}

export default ItemList;