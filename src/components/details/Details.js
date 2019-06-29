import React from 'react';

export default class Details  extends React.Component {
  render () {
    return(
      <article className="details">
        <p>${this.props.details.price}</p>
        <img src={this.props.details.sprites.front_default} alt={this.props.details.name} />
        <button  onClick={this.props.addToBasket}>Add to basket</button>
        {/* <pre>{JSON.stringify(this.props.details, null, 2)} </pre> */}
      </article>
    );
  }
}
