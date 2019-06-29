import React from 'react';
import { connect } from 'react-redux';
import { addToBasket } from '../../store/actions/basket';
import { fetchDetails } from '../../store/actions/details';
import Details from '../details/Details'

class ShopDetails extends React.Component {
  constructor (props) {
    super(props);
    this.pokemonName =this.props.match.params.pokemonName
  }

  componentWillMount () {
    this.props.fetchDetails(this.pokemonName)
  }

  render () {
    if (!this.props.details[this.pokemonName]) {
      return <p>No information on this.pokemonName</p>
    }

    return(
      <div id="shop-details">
        <h1>Details for {this.pokemonName}</h1>

        <Details details={this.props.details[this.pokemonName]} addToBasket={() => this.props.addToBasket(this.pokemonName)} />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  details: state.details
});

const mapDispatchToProps = dispatch => ({
  fetchDetails: name => dispatch(fetchDetails(name)),
  addToBasket: name => dispatch(addToBasket(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopDetails)
