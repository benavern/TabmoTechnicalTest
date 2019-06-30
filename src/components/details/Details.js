import React from 'react';

export default class Details  extends React.Component {
  render () {
    return(
      <article className="details card">
        <div className="card-line card-columns">
          <div className="details-avatar">
            <img src={this.props.details.sprites.front_default} alt={this.props.details.name} />
          </div>

          <div className="details-name">
            <h2>{this.props.details.name}</h2>
          </div>
        </div>

        <div className="card-line card-columns">
          <div className="card-text">
            <b>Types</b>: {this.props.details.types.map(t => t.type.name).join(', ')}
          </div>

          <div className="card-text">
            <b>Abilities</b>: {this.props.details.abilities.map(a => a.ability.name).join(', ')}
          </div>
        </div>

        <div className="card-line card-columns">
          <div className="card-text">
            <b>Forms</b>: {this.props.details.forms.map(form => form.name).join(', ')}
          </div>

          <div className="card-text">
            <b>Moves</b>: {this.props.details.moves.map(m => m.move.name).join(', ')}
          </div>
        </div>

        <div className="card-line card-columns card-btns">
          <div className="card-text"><b>Price</b>: ${this.props.details.price}</div>
          <button onClick={this.props.addToBasket}>Add to basket</button>
        </div>

      </article>
    );
  }
}
