import React from 'react';
import List from '../list/List'

export default class Shop extends React.Component {

  render () {
    return(
      <div id="shop">
        <h1>List of Pokemons</h1>

        <List />
      </div>
    );
  }
}
