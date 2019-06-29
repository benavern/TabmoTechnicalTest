import React from 'react';
import BasketItem from './BasketItem';

export default class BasketList extends React.Component {
  render () {
    return(
      <div className="basket-list grid">
        {this.props.items.map((item, i) => <BasketItem key={i} item={item} addToBasket={() => this.props.addToBasket(item.name)} removeFromBasket={() => this.props.removeFromBasket(item.name)} />)}
      </div>
    );
  }
}
