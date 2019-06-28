import React from 'react';

export default class ItemDetail extends React.Component {

  render () {
    return(
      <h1>{this.props.match.params.pokemonName}</h1>
    );
  }
}
