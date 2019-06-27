import React from 'react';

export default class Item extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      pokemon: props.pokemon
    }
  }

  render () {
    return (
      <li className="grid-item w-2">
        <div className="list-item">
          <header class="list-item__header">
            <h2>#{this.state.pokemon.index} - {this.state.pokemon.name}</h2>
          </header>

          <div className="list-item__price">
            {this.state.pokemon.price}€
          </div>

          <footer className="list-item__footer">
            <a href={this.state.pokemon.url} className="pokemon-list-item__details">Details</a>
          </footer>
        </div>
      </li>
    );
  }
}
