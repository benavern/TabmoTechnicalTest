import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class About extends React.Component {
  render () {
    return(
      <div id="about">
        <h1>About {this.props.player.name}</h1>

        <div className="grid">
          <div className="grid-item w-2">
            <div className="about-avatar text-center">
              <img src={this.props.player.avatar} alt="Jean" />
            </div>
          </div>

          <div className="grid-item w-2">
            <div className="card">
              <div className="card-line card-text">
                <b>Name</b> : {this.props.player.name}
              </div>

              <div className="card-line card-text">
                <b>Age</b> : {this.props.player.age}
              </div>

              <div className="card-line card-text">
                <b>Pokemons</b> :
                <ul>
                  {this.props.player.pokemons.map((pokemon, i) => {
                    return <li key={i}><Link to={`/shop/${pokemon.name}`}>{pokemon.name} (x{pokemon.nb})</Link></li>
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    player: state.about
  }
}

export default connect(mapStateToProps)(About)
