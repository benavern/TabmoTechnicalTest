import React from 'react';

export default class BasketList extends React.Component {
  render () {
    return(
      <div className="basket-list-item">
        <h2>{this.props.item.name} (x{this.props.item.nb})</h2>
        <button onClick={this.props.addToBasket}>+</button>
        <button onClick={this.props.removeFromBasket}>-</button>
      </div>
    );
  }
}
