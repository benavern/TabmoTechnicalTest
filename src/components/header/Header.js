import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends React.Component {

  render () {
    return (
      <header className="header">
        <div className="container header-content">
          <Link to="/" className="logo nav-item">
            POKEZON
          </Link>

          <nav>
            <ul>
              <li>
                <Link to="/" className="nav-item">
                  Home
                </Link>

                <Link to="/shop" className="nav-item">
                  Shop
                </Link>

                <Link to="/basket" className="nav-item">
                  Basket ({this.props.basketNbItems})
                </Link>

                <Link to="/about" className="nav-item">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}


const mapStateToProps = state => ({
  basketNbItems: state.basket.nbItems
});

export default connect(mapStateToProps)(Header)
