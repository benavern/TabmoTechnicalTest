import React from 'react';
import List from '../list/List';
import { connect } from 'react-redux';

class Shop extends React.Component {
  render () {
    return(
      <div id="shop">
        <h1>List of Pokemons</h1>

        <List pokemons={this.props.pokemons} />

        <button onClick={() => this.props.add({ name: 'YOLOkemon' })}>Add 1 pokemon</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemons: state.pokemons.list
});

const mapDispatchToProps = dispatch => ({
  add: pokemon => dispatch({
    type: 'ADD',
    payload: pokemon
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
