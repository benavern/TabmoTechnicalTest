import React from 'react';
import BasketList from '../basket/BasketList';
import { connect } from 'react-redux';
import { addToBasket, removeFromBasket } from '../../store/actions/basket';

class Basket extends React.Component {
  render () {
    return(
      <div id="basket">
        <h1> Basket ({this.props.basketNbItems}) </h1>

        <BasketList items={this.props.basketItems} addToBasket={this.props.addToBasket} removeFromBasket={this.props.removeFromBasket}/>

        <h3 className="text-right">Total: ${this.props.basketTotalPrice}</h3>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  basketItems: state.basket.items,
  basketNbItems: state.basket.nbItems,
  basketTotalPrice: state.basket.totalPrice
});

const mapDispatchToProps = dispatch => ({
  addToBasket: name => dispatch(addToBasket(name)),
  removeFromBasket: name => dispatch(removeFromBasket(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket)
