import React, {Component} from 'react';

class RemoveButton extends Component {
  onClickRemove(e) {
    console.log(e)
  }

  render() {
    return(
      <div>
        <button onClick={this.onClickRemove}>
          X Remove
        </button>
      </div>

    )
  }
}

export default RemoveButton;