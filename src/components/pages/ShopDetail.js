import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
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
    return(
      <div id="shop-details">
        <h1>PoKéMoN details</h1>

        {this.props.details[this.pokemonName]

          ? <Details details={this.props.details[this.pokemonName]} addToBasket={() => this.props.addToBasket(this.pokemonName)} />

          : <div className="shop-is-loading text-center">
              <div className="loader"></div>
            </div>}

        <div className="back-to-shop">
          <Link to="/shop">&larr; Back to the shop</Link>
        </div>
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
