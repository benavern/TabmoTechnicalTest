import React from 'react';
import BasketList from '../basket/BasketList';
import { connect } from 'react-redux';
import { addToBasket, removeFromBasket } from '../../store/actions/basket';

class Basket extends React.Component {
  render () {
    return(
      <div id="basket">
        <h1> Basket ({this.props.basket.reduce((total, current) => total + current.nb, 0)}) </h1>

        <BasketList items={this.props.basket} addToBasket={this.props.addToBasket} removeFromBasket={this.props.removeFromBasket}/>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  basket: state.basket
});

const mapDispatchToProps = dispatch => ({
  addToBasket: name => dispatch(addToBasket(name)),
  removeFromBasket: name => dispatch(removeFromBasket(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket)
