import React from 'react';
import List from '../list/List';
import { connect } from 'react-redux';
import { fetchList } from '../../store/actions/pokemons';
import { addToBasket } from '../../store/actions/basket';

class Shop extends React.Component {
  componentWillMount() {
    this.props.fetch(this.props.nextOffset)
  }

  render () {
    return(
      <div id="shop">
        <h1>List of PoKéMoNs</h1>

        <List pokemons={this.props.pokemons} addToBasket={this.props.addToBasket} />

        <button onClick={() => this.props.fetch(this.props.nextOffset)}>fetch 20</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemons: state.pokemons.list,
  nextOffset: state.pokemons.offset
});

const mapDispatchToProps = dispatch => ({
  fetch: nextOffset => dispatch(fetchList(nextOffset)),
  addToBasket: name => dispatch(addToBasket(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
