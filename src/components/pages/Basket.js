import React from 'react';
import BasketList from '../basket/BasketList';
import { connect } from 'react-redux';
import { addToBasket, removeFromBasket, buyBasket } from '../../store/actions/basket';

class Basket extends React.Component {
  render () {
    return(
      <div id="basket">
        <h1> Basket ({this.props.basket.nbItems}) </h1>

        <BasketList items={this.props.basket.items} addToBasket={this.props.addToBasket} removeFromBasket={this.props.removeFromBasket}/>

        <button className="basket-pay-button" onClick={() => this.props.buyBasket(this.props.basket)} disabled={!this.props.basket.nbItems}>
          Payer ${this.props.basket.totalPrice}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  basket: state.basket
});

const mapDispatchToProps = dispatch => ({
  addToBasket: name => dispatch(addToBasket(name)),
  removeFromBasket: name => dispatch(removeFromBasket(name)),
  buyBasket: basket => dispatch(buyBasket(basket))
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket)
