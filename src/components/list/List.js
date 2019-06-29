import React from 'react';
import Item from './Item'

export default class List extends React.Component {
  render () {
    return (
      <ul className="grid list">
        {this.props.pokemons.map((pokemon, i) => <Item key={i} pokemon={pokemon} addToBasket={() => this.props.addToBasket(pokemon.name)} />)}
      </ul>
    );
  }
}
