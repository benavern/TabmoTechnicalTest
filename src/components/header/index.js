import React from 'react';

export default class Header extends React.Component {

  render () {
    return (
      <header className="header">
        <div className="container header-content">
          <a href="#home" className="logo nav-item">
            POKEZONE
          </a>

          <nav>
            <ul>
              <li>
                <a href="#home" className="nav-item">
                  Home
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
