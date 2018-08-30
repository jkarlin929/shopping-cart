import React, {Component} from 'react';

class RemoveButton extends Component {
  render() {
    return(
      <button {...this.props}>X Remove</button>
    )
  }
}

export default RemoveButton;