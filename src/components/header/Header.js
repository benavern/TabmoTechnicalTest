import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      navVisible: false
    }
  }

  onNavToggle () {
    this.setState({
      navVisible: !this.state.navVisible
    });
  }

  render () {
    return (
      <header className="header">
        <div className="container header-content">
          <NavLink to="/" className="logo nav-item">
            PoKéZoN
          </NavLink>

          <button className="nav-item nav-toggle" onClick={this.onNavToggle.bind(this)}>
            &#9776;
          </button>

          <nav className={this.state.navVisible ? 'visible' : ''}>
            <ul>
              <li>
                <NavLink to="/"  exact className="nav-item" onClick={this.onNavToggle.bind(this)}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/shop" className="nav-item" onClick={this.onNavToggle.bind(this)}>
                  Shop
                </NavLink>
              </li>

              <li>
                <NavLink to="/basket" className="nav-item" onClick={this.onNavToggle.bind(this)}>
                  Basket <small>(x{this.props.basketNbItems} / ${this.props.basketTotalPrice})</small>
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className="nav-item" onClick={this.onNavToggle.bind(this)}>
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}


const mapStateToProps = state => ({
  basketNbItems: state.basket.nbItems,
  basketTotalPrice: state.basket.totalPrice
});

export default connect(mapStateToProps)(Header)
