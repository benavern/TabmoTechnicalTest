import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render () {
    return(
      <div id="home">
        <h1 className="custom-title home-title text-center">PoKéZoN</h1>

        <div className="card">
          <div className="card-line card-text">
            <h2>Welcome to PoKéZoN!</h2>
          </div>

          <div className="card-line card-text">
            This website is a virtual pokemon shopping application.
            It has been built with create-react-app, react-router-dom, react-redux, redux, redux-thunk, axios &amp; node-sass.
          </div>

          <div className="card-line card-text">
            I am <a href="https://benjamin.caradeuc.info/" target="_blank" rel="noopener noreferrer">Benjamin Caradeuc</a>, had almost never used react before but enjoyed playing with it for that project.
            I'll surely will consider using it more often!
          </div>

          <div className="card-line card-text">
            Enjoy playing with it, I hope this will feat your expectations!
          </div>

          <div className="card-line card-btns">
            <Link to="/shop">Buy some PoKéMoNs</Link>
            <Link to="/about">Your account</Link>
          </div>
        </div>
      </div>
    );
  }
}
