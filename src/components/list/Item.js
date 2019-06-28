import React from 'react';
import { Link } from 'react-router-dom';

export default class Item extends React.Component {

  render () {
    return (
      <li className="grid-item w-2">
        <div className="list-item">
          <header className="list-item__header">
            <h2>{this.props.pokemon.name}</h2>
          </header>

          <div className="list-item__price">
            ${this.props.pokemon.price}
          </div>

          <footer className="list-item__footer">
            <Link to={`/shop/${this.props.pokemon.name}`} className="pokemon-list-item__details">
              Details
            </Link>
          </footer>
        </div>
      </li>
    );
  }
}
