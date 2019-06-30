import React from 'react';
import { Link } from 'react-router-dom';

export default class BasketList extends React.Component {
  render () {
    return(
      <div className="basket-item grid-item card">
        <div className="card-line card-text">
          <h2>{this.props.item.name}</h2>
        </div>

        <div className="card-line card-btns card-columns">
          <button onClick={this.props.removeFromBasket}>-</button>

          <div className="card-text">
            Articles: <span className="basket-item-value">{this.props.item.nb}</span>
          </div>

          <button onClick={this.props.addToBasket}>+</button>
        </div>

        <div className="card-line card-btns card-columns">
          <Link to={`/shop/${this.props.item.name}`}>
            Details
          </Link>

          <div className="card-text">
            Unit: <span className="basket-item-value">${this.props.item.price}</span>
          </div>

          <div className="card-text basket-item-total">
            Total: <span className="basket-item-value">${this.props.item.price * this.props.item.nb}</span>
          </div>
        </div>
      </div>
    );
  }
}
