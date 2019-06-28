import React from 'react';
import Item from './Item'

const rawPokemons = [
  {
    name:"bulbasaur",
    url:"https://pokeapi.co/api/v2/pokemon/1/"
  },
  {
    name:"ivysaur",
    url:"https://pokeapi.co/api/v2/pokemon/2/"
  },
  {
    name:"bulbasaur",
    url:"https://pokeapi.co/api/v2/pokemon/1/"
  },
  {
    name:"ivysaur",
    url:"https://pokeapi.co/api/v2/pokemon/2/"
  }
];

export default class List extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      pokemons: []
    };
  }

  componentDidMount() {
    this.setState({
      pokemons: rawPokemons.map((pokemon, i) => {
        pokemon.price = Math.round(Math.random() * 1000);
        pokemon.index = i + 1;
        return (
          <Item key={i} pokemon={pokemon} />
        );
      })
    });
  }

  render () {
    return (
      <ul className="grid list">
        {this.state.pokemons}
      </ul>
    );
  }
}
