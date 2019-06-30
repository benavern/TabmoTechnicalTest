import React from 'react';
import List from '../list/List';
import { connect } from 'react-redux';
import { fetchList } from '../../store/actions/pokemons';
import { addToBasket } from '../../store/actions/basket';

class Shop extends React.Component {
  componentWillMount() {
    this.fetchList();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll.bind(this), false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll.bind(this), false);
  }

  onScroll () {
    const scrolled = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 100)
      if (scrolled && !this.props.isLoading && this.props.pokemons.length) {
        this.fetchList();
      }
  }

  fetchList () {
    this.props.fetch(this.props.nextOffset);
  }

  render () {
    return(
      <div id="shop">
        <h1>List of PoKéMoNs</h1>

        <List pokemons={this.props.pokemons} addToBasket={this.props.addToBasket} />

        {this.props.isLoading

          ? <div className="is-loading text-center">
              <div className="loader"></div>
            </div>

          : ''}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemons: state.pokemons.list,
  nextOffset: state.pokemons.offset,
  isLoading: state.pokemons.loading
});

const mapDispatchToProps = dispatch => ({
  fetch: nextOffset => dispatch(fetchList(nextOffset)),
  addToBasket: name => dispatch(addToBasket(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
