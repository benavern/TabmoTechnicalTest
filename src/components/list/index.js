import React from 'react';
import Item from './item'

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
]

export default class List extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      pokemons: rawPokemons.map((pokemon, i) => {
        pokemon.price = Math.round(Math.random() * 1000)
        pokemon.index = i + 1
        return <Item key={i} pokemon={pokemon} />
      })
    }
  }

  render () {
    return (
      <main>
        <div className="container">
          <h1>List of Pokemons</h1>

          <ul className="grid list">
            {this.state.pokemons}
          </ul>
        </div>
      </main>
    );
  }
}
