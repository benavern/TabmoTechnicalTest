import React from 'react';

export default class BasketList extends React.Component {
  render () {
    return(
      <div className="basket-item grid-item card">
        <div className="card-line card-text">
          <h2>{this.props.item.name}</h2>
        </div>

        <div className="card-line card-btns">
          <button onClick={this.props.removeFromBasket}>-</button>
          <button onClick={this.props.addToBasket}>+</button>
        </div>

        <div className="card-line card-columns">
          <div className="card-text">
            Unit: <span className="basket-item-value">${this.props.item.price}</span>
          </div>

          <div className="card-text">
            Articles: <span className="basket-item-value">{this.props.item.nb}</span>
          </div>

          <div className="card-text basket-item-total">
            Total: <span className="basket-item-value">${this.props.item.price * this.props.item.nb}</span>
          </div>
        </div>
      </div>
    );
  }
}
