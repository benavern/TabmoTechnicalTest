import React from 'react';
import { Link } from 'react-router-dom';

export default class Item extends React.Component {

  render () {
    return (
      <li className="grid-item w-2">
        <div className="list-item">
          <header className="list-item-line">
            <h2>{this.props.pokemon.name}</h2>
          </header>

          <div className="list-item-line">
            <h3>${this.props.pokemon.price}</h3>
          </div>

          <footer className="list-item-btns">
            <Link to={`/shop/${this.props.pokemon.name}`}>
              Details
            </Link>

            <button onClick={this.props.addToBasket}>
              Add to basket
            </button>
          </footer>
        </div>
      </li>
    );
  }
}
